(function () {
  var _dlog = window.__DEBUG_LOG__;
  var _t0 = performance.now();
  function _ts() { return (performance.now() - _t0).toFixed(1); }
  function _d(m,d) { if(_dlog) _dlog.push({t:_ts(),msg:'i18n:'+m,detail:d||''}); try{console.log('[I18N '+_ts()+'ms]',m,d||'');}catch(ex){} }

  _d('script-start', {readyState:document.readyState, hasBody:!!document.body, htmlClass:document.documentElement.className});
  performance.mark('i18n-script-start');

  var config = window.DOCUMD_HOMEPAGE_I18N;
  if (!config) { _d('no-config-exit'); return; }

  // pageMeta and translations are mutated by per-language IIFEs —
  // they share the same object references created by common.js
  var pageMeta = config.pageMeta || {};
  var translations = config.translations || {};
  var fallbackLocales = config.fallbackLocales || {};
  var supported = config.supported || ['en'];
  var I18N_BASE = 'assets/js/i18n/';
  var loaded = {};
  var loadCallbacks = {};

  var originalText = new WeakMap();
  var metaDescription = document.querySelector('meta[name="description"]');
  var languageSelect = document.getElementById('languageSelect');

  _d('config-loaded', {
    hasPageMetaEn: !!pageMeta['en'],
    transKeys: Object.keys(translations),
    hasLangSelect: !!languageSelect,
    hasMetaDesc: !!metaDescription
  });

  /* ---------- language detection ---------- */

  function normalizeLanguage(value) {
    if (!value) return 'en';
    var lower = value.toLowerCase();
    if (lower.indexOf('zh') === 0) {
      if (lower.indexOf('tw') >= 0 || lower.indexOf('hk') >= 0 || lower.indexOf('hant') >= 0) return 'zh-TW';
      return 'zh-CN';
    }
    if (lower.indexOf('ru') === 0) return 'ru';
    if (lower.indexOf('ja') === 0) return 'ja';
    if (lower.indexOf('hi') === 0) return 'hi';
    if (lower.indexOf('ko') === 0) return 'ko';
    if (lower.indexOf('de') === 0) return 'de';
    if (lower.indexOf('pt-br') === 0) return 'pt-BR';
    if (lower.indexOf('pt-pt') === 0 || lower === 'pt') return 'pt-PT';
    if (lower.indexOf('nl') === 0) return 'nl';
    if (lower.indexOf('uk') === 0) return 'uk';
    if (lower.indexOf('vi') === 0) return 'vi';
    if (lower.indexOf('be') === 0) return 'be';
    if (lower.indexOf('fr') === 0) return 'fr';
    if (lower.indexOf('it') === 0) return 'it';
    if (lower.indexOf('id') === 0) return 'id';
    if (lower.indexOf('es') === 0) return 'es';
    if (lower.indexOf('th') === 0) return 'th';
    if (lower.indexOf('sv') === 0) return 'sv';
    if (lower.indexOf('tr') === 0) return 'tr';
    if (lower.indexOf('et') === 0) return 'et';
    if (lower.indexOf('ms') === 0) return 'ms';
    if (lower.indexOf('pl') === 0) return 'pl';
    if (lower.indexOf('fi') === 0) return 'fi';
    if (lower.indexOf('lt') === 0) return 'lt';
    if (lower.indexOf('no') === 0) return 'no';
    if (lower.indexOf('da') === 0) return 'da';
    return supported.indexOf(value) >= 0 ? value : 'en';
  }

  function getInitialLanguage() {
    var params = new URLSearchParams(window.location.search);
    var result = normalizeLanguage(params.get('lang') || localStorage.getItem('documd-lang') || navigator.language);
    _d('getInitialLanguage', {raw:params.get('lang')||localStorage.getItem('documd-lang')||navigator.language, normalized:result});
    return result;
  }

  /* ---------- lazy loading ---------- */

  function loadLanguage(lang, callback) {
    _d('loadLanguage', {lang:lang, alreadyLoaded:!!loaded[lang], hasTranslations:!!translations[lang]});
    if (loaded[lang]) { _d('loadLanguage:cached', lang); callback(); return; }
    // If translations were already loaded (e.g. sync-preloaded in <head>),
    // skip the network request and callback immediately.
    if (translations[lang]) {
      _d('loadLanguage:preloaded', {lang:lang, keyCount:Object.keys(translations[lang]).length});
      loaded[lang] = true;
      callback();
      return;
    }
    _d('loadLanguage:fetch', {lang:lang, url:I18N_BASE+lang+'.js'});
    if (loadCallbacks[lang]) { loadCallbacks[lang].push(callback); return; }

    loadCallbacks[lang] = [callback];
    var script = document.createElement('script');
    script.src = I18N_BASE + lang + '.js';

    script.onload = function () {
      loaded[lang] = true;
      var cbs = loadCallbacks[lang];
      delete loadCallbacks[lang];
      for (var i = 0; i < cbs.length; i++) cbs[i]();
    };

    script.onerror = function () {
      var cbs = loadCallbacks[lang];
      delete loadCallbacks[lang];
      // Silently continue — missing translation data just means
      // English fallback text will be used for that language.
      for (var i = 0; i < cbs.length; i++) cbs[i]();
    };

    document.head.appendChild(script);
  }

  function ensureLanguages(language, callback) {
    // English pageMeta is already embedded in common.js.
    // No extra file is needed for English — callback immediately.
    // For other languages, load the target locale file directly.
    var normalized = normalizeLanguage(language);
    if (normalized === 'en') {
      callback();
    } else {
      loadLanguage(normalized, callback);
    }
  }

  /* ---------- translation ---------- */

  function buildDictionary(language) {
    var chain = [];
    var current = language;
    var seen = new Set();
    while (current && !seen.has(current)) {
      chain.unshift(current);
      seen.add(current);
      current = fallbackLocales[current];
    }
    var dictionary = {};
    chain.forEach(function (locale) {
      Object.assign(dictionary, translations[locale] || {});
    });
    return dictionary;
  }

  function translateTextNodes(language) {
    var dictionary = buildDictionary(language);
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent || parent.closest('script, style, svg, [data-i18n], [data-i18n-html]')) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      var original = originalText.get(node);
      var key = original.trim();
      var translated = dictionary[key] || key;
      node.nodeValue = original.replace(key, translated);
    });
  }

  function translateMarkedNodes(language) {
    var dictionary = buildDictionary(language);
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (!key) return;
      if (!node.hasAttribute('data-i18n-original')) {
        node.setAttribute('data-i18n-original', node.textContent);
      }
      node.textContent = dictionary[key] || key;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (node) {
      var key = node.getAttribute('data-i18n-html');
      if (!key) return;
      if (!node.hasAttribute('data-i18n-html-original')) {
        node.setAttribute('data-i18n-html-original', node.innerHTML);
      }
      node.innerHTML = dictionary[key] || node.getAttribute('data-i18n-html-original');
    });
  }

  function getLanguageLabel(language) {
    if (language === 'zh-CN') return '语言';
    if (language === 'zh-TW') return '語言';
    if (language === 'ru') return 'Язык';
    if (language === 'ja') return '言語';
    if (language === 'hi') return 'भाषा';
    if (language === 'ko') return '언어';
    if (language === 'de') return 'Sprache';
    if (language === 'pt-BR' || language === 'pt-PT' || language === 'es') return 'Idioma';
    if (language === 'nl') return 'Taal';
    if (language === 'uk' || language === 'be') return 'Мова';
    if (language === 'vi') return 'Ngôn ngữ';
    if (language === 'fr') return 'Langue';
    if (language === 'it') return 'Lingua';
    if (language === 'id' || language === 'ms') return 'Bahasa';
    if (language === 'th') return 'ภาษา';
    if (language === 'sv' || language === 'no') return 'Språk';
    if (language === 'tr') return 'Dil';
    if (language === 'et') return 'Keel';
    if (language === 'pl') return 'Język';
    if (language === 'fi') return 'Kieli';
    if (language === 'lt') return 'Kalba';
    if (language === 'da') return 'Sprog';
    return 'Language';
  }

  /* ---------- apply ---------- */

  function doApplyLanguage(normalized) {
    _d('doApplyLanguage:start', {
      normalized:normalized,
      htmlClassBefore: document.documentElement.className,
      bodyVis: document.body ? getComputedStyle(document.body).visibility : 'no-body',
      i18nElCount: document.querySelectorAll('[data-i18n]').length
    });
    performance.mark('i18n-doApply-start');

    var meta = pageMeta[normalized] || pageMeta['en'];
    document.documentElement.lang = meta ? meta.lang : 'en';
    document.title = meta ? meta.title : document.title;
    if (metaDescription && meta) metaDescription.setAttribute('content', meta.description);
    if (languageSelect) languageSelect.value = normalized;

    translateMarkedNodes(normalized);
    _d('doApplyLanguage:markedDone');

    translateTextNodes(normalized);
    _d('doApplyLanguage:textDone');

    if (languageSelect) {
      var languageLabel = getLanguageLabel(normalized);
      languageSelect.setAttribute('aria-label', languageLabel);
      languageSelect.setAttribute('title', languageLabel);
    }
    localStorage.setItem('documd-lang', normalized);

    // Reveal the page now that translations have been applied.
    // The .i18n-loading class hides body via display:none to prevent
    // a flash of untranslated content.
    _d('doApplyLanguage:beforeReveal', {
      hasClass: document.documentElement.classList.contains('i18n-loading'),
      bodyDisplay: document.body ? getComputedStyle(document.body).display : 'no-body'
    });
    document.documentElement.classList.remove('i18n-loading');
    _d('doApplyLanguage:revealed', {
      htmlClass: document.documentElement.className,
      bodyDisplay: document.body ? getComputedStyle(document.body).display : 'no-body',
      title: document.title.substring(0,50),
      firstI18nText: (document.querySelector('[data-i18n]')||{}).textContent
    });
    performance.mark('i18n-doApply-end');
    // Notify other components (e.g. custom language dropdown)
    try {
      document.dispatchEvent(new CustomEvent('documd-language-applied', { detail: { language: normalized } }));
    } catch (e) { /* ignore */ }
  }

  function applyLanguage(language) {
    _d('applyLanguage', {language:language});
    ensureLanguages(language, function () {
      _d('applyLanguage:callback', {language:language, normalized:normalizeLanguage(language)});
      doApplyLanguage(normalizeLanguage(language));
    });
  }

  /* ---------- bootstrap ---------- */

  if (languageSelect) {
    languageSelect.addEventListener('change', function (event) {
      _d('languageSelect:change', event.target.value);
      applyLanguage(event.target.value);
    });
  }

  var initial = getInitialLanguage();
  _d('bootstrap', {initial:initial, readyState:document.readyState, bodyChildCount:document.body?document.body.children.length:-1});
  try {
    applyLanguage(initial);
  } catch (e) {
    _d('bootstrap-error', String(e));
    // If anything fails, force-reveal the body so the page is never stuck blank.
    document.documentElement.classList.remove('i18n-loading');
  }
})();
