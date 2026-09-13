/**
 * Latest-release lookup for the docu.md site.
 *
 * The site is deployed from this repository alone, so a version number or a
 * download link baked in at build time goes stale the moment a release is cut.
 * The GitHub REST API allows cross-origin reads (Access-Control-Allow-Origin:
 * *), so the page resolves the newest release in the browser and rewrites every
 * [data-release-*] node it finds:
 *
 *   data-release-tag      textContent <- "v5.4.0"
 *   data-release-version  textContent <- "5.4.0"
 *   data-release-url      href        <- the release page
 *   data-release-releases href        <- every release
 *   data-release-block    unhidden once a release was resolved
 *   data-release-assets   container the per-file chips are inserted into,
 *                         in front of the static "GitHub Releases" chip
 *
 * The band itself is static markup and always visible, so a visitor keeps a
 * working entry point to the releases even when the API is unreachable or no
 * release carries installers yet; only the version pill and the per-file chips
 * depend on the lookup. Unauthenticated GitHub API calls are limited to 60 per
 * hour per visitor IP, so an answer is cached in localStorage and only
 * refetched every REFRESH_AFTER.
 */
(function () {
  'use strict';

  var REPO = 'markdown-viewer/markdown-viewer-extension';
  var RELEASES_PAGE = 'https://github.com/' + REPO + '/releases';
  var RELEASES_API = 'https://api.github.com/repos/' + REPO + '/releases?per_page=30';
  var CACHE_KEY = 'documd-release-info';
  var REFRESH_AFTER = 15 * 60 * 1000;
  var CACHE_MAX_AGE = 30 * 24 * 60 * 60 * 1000;

  // Labels are a platform name plus a file type on purpose: they read the same
  // in every language the site is translated into, so they stay out of i18n.
  var DOWNLOADS = [
    { label: 'Chrome', asset: 'chrome-v{version}.zip' },
    { label: 'Edge', asset: 'edge-v{version}.zip' },
    { label: 'Firefox', asset: 'firefox-v{version}.zip' },
    { label: 'VS Code', asset: 'vscode-v{version}.vsix' },
    { label: 'Obsidian', asset: 'obsidian-v{version}.zip' },
    { label: 'Android', asset: 'android-v{version}.apk' },
    { label: 'CLI', asset: 'documd-cli-v{version}.tgz' }
  ];

  // Installer assets, in the order they are offered. The Obsidian release is
  // tagged with the bare version and carries only the plugin files, so it is
  // never what a visitor wants to download from here.
  var INSTALLER_ASSET = /^(chrome|edge|firefox|vscode|obsidian|documd-cli|android)-/;

  function each(selector, callback) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), callback);
  }

  function assetName(template, info) {
    return template.split('{version}').join(info.version).split('{tag}').join(info.tag);
  }

  /**
   * @returns {{tag: string, version: string, url: string, publishedAt: string,
   *            installers: number, assets: Object<string, string>}|null}
   */
  function normalize(release) {
    if (!release || release.draft || release.prerelease) return null;

    var tag = String(release.tag_name || '');
    var match = /^v?(\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.]+)?)$/.exec(tag);
    if (!match) return null;

    var assets = {};
    var installers = 0;

    (release.assets || []).forEach(function (asset) {
      if (!asset || !asset.name || !asset.browser_download_url) return;
      assets[asset.name] = asset.browser_download_url;
      if (INSTALLER_ASSET.test(asset.name)) installers += 1;
    });

    return {
      tag: tag,
      version: match[1],
      url: release.html_url || RELEASES_PAGE + '/tag/' + encodeURIComponent(tag),
      publishedAt: release.published_at || release.created_at || '',
      installers: installers,
      assets: assets
    };
  }

  /**
   * Newest published release with installers wins; when no release carries any
   * yet, the newest release still gives the band a version to point at.
   */
  function pickLatest(releases) {
    var candidates = [];

    (releases || []).forEach(function (release) {
      var info = normalize(release);
      if (info) candidates.push(info);
    });

    candidates.sort(function (left, right) {
      return (Date.parse(right.publishedAt) || 0) - (Date.parse(left.publishedAt) || 0);
    });

    var withInstallers = candidates.filter(function (info) { return info.installers > 0; });
    return withInstallers[0] || candidates[0] || null;
  }

  function extensionOf(name) {
    var dot = name.lastIndexOf('.');
    return dot === -1 ? '' : name.slice(dot + 1);
  }

    /**
   * Inserts the per-file chips in front of the static "GitHub Releases" chip.
   * The list lives here rather than in the markup so every page gets the same
   * links and a missing asset simply drops its chip.
   */
  function renderDownloads(info) {
    var slots = document.querySelectorAll('[data-release-assets]');
    if (!slots.length) return 0;

    var links = [];

    DOWNLOADS.forEach(function (entry) {
      var name = assetName(entry.asset, info);
      var url = info.assets[name];
      if (!url) return;
      links.push({ label: entry.label + ' .' + extensionOf(name), href: url });
    });

    each('[data-release-assets]', function (slot) {
      // Idempotent: fill() runs again whenever a fresher answer arrives.
      Array.prototype.forEach.call(slot.querySelectorAll('.release-asset'), function (node) {
        if (!node.classList.contains('release-asset-more')) slot.removeChild(node);
      });

      var anchor = slot.querySelector('.release-asset-more');

      links.forEach(function (link) {
        var chip = document.createElement('a');
        chip.className = 'release-asset';
        chip.href = link.href;
        chip.target = '_blank';
        chip.rel = 'noopener';
        chip.textContent = link.label;
        slot.insertBefore(chip, anchor);
      });
    });

    return links.length;
  }

  function fill(info) {
    renderDownloads(info);

    each('[data-release-tag]', function (node) { node.textContent = 'v' + info.version; });
    each('[data-release-version]', function (node) { node.textContent = info.version; });
    each('[data-release-url]', function (node) { node.href = info.url; });
    each('[data-release-releases]', function (node) { node.href = RELEASES_PAGE; });

    // The version pill is the only element the lookup reveals.
    each('[data-release-block]', function (node) { node.removeAttribute('hidden'); });

    document.dispatchEvent(new CustomEvent('documd-release-applied', { detail: info }));
  }

  function readCache() {
    try {
      var raw = window.localStorage.getItem(CACHE_KEY);
      if (!raw) return null;

      var entry = JSON.parse(raw);
      if (!entry || !entry.savedAt || !entry.info || !entry.info.tag) return null;
      if (Date.now() - entry.savedAt > CACHE_MAX_AGE) return null;

      return entry;
    } catch (error) {
      return null;
    }
  }

  function writeCache(info) {
    try {
      window.localStorage.setItem(CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        info: info
      }));
    } catch (error) {
      // Private mode or a full quota: the next page view simply asks again.
    }
  }

  function fetchLatest() {
    return window.fetch(RELEASES_API, {
      // Accept is a CORS-safelisted header, so no preflight is needed.
      // GitHub's own `cache-control: max-age=60` absorbs bursts of page views.
      headers: { Accept: 'application/vnd.github+json' },
      credentials: 'omit',
      mode: 'cors'
    }).then(function (response) {
      if (!response.ok) throw new Error('GitHub API responded ' + response.status);
      return response.json();
    }).then(function (releases) {
      var info = pickLatest(releases);
      if (!info) throw new Error('no published release found');
      writeCache(info);
      return info;
    });
  }

  if (!window.fetch) return;

  var cached = readCache();
  if (cached) fill(cached.info);

  // A recent answer is good enough; skip the request entirely.
  if (cached && Date.now() - cached.savedAt < REFRESH_AFTER) return;

  fetchLatest().then(function (info) {
    if (!cached || cached.info.tag !== info.tag) fill(info);
  }).catch(function (error) {
    // Offline, rate limited, or no release at all: the band keeps its static
    // GitHub Releases chip and the version pill stays hidden.
    if (window.console && console.warn) {
      console.warn('[release-info] ' + error.message);
    }
  });
})();
