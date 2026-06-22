(function () {
  var config = window.DOCUMD_HOMEPAGE_I18N;
  if (!config) {
    return;
  }

  var pageMeta = config.pageMeta || {};
  var translations = config.translations || {};
  var fallbackLocales = config.fallbackLocales || {};
  var supported = config.supported || ['en'];
  var originalText = new WeakMap();
  var metaDescription = document.querySelector('meta[name="description"]');
  var languageSelect = document.getElementById('languageSelect');

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
    return normalizeLanguage(params.get('lang') || localStorage.getItem('documd-lang') || navigator.language);
  }

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

  function applyLanguage(language) {
    var normalized = normalizeLanguage(language);
    var meta = pageMeta[normalized] || pageMeta.en;
    document.documentElement.lang = meta.lang;
    document.title = meta.title;
    if (metaDescription) metaDescription.setAttribute('content', meta.description);
    if (languageSelect) languageSelect.value = normalized;
    translateMarkedNodes(normalized);
    translateTextNodes(normalized);
    if (languageSelect) {
      var languageLabel = getLanguageLabel(normalized);
      languageSelect.setAttribute('aria-label', languageLabel);
      languageSelect.setAttribute('title', languageLabel);
    }
    localStorage.setItem('documd-lang', normalized);
  }

  if (languageSelect) {
    languageSelect.addEventListener('change', function (event) {
      applyLanguage(event.target.value);
    });
  }

  applyLanguage(getInitialLanguage());
})();
