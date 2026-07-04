(function(){
  var root = window.DOCUMD_HOMEPAGE_I18N = window.DOCUMD_HOMEPAGE_I18N || {};
  root.supported = ["en","zh-CN","zh-TW","ru","ja","hi","ko","de","pt-BR","pt-PT","nl","uk","vi","be","fr","it","id","es","th","sv","tr","et","ms","pl","fi","lt","no","da"];
  root.fallbackLocales = {};
  root.pageMeta = root.pageMeta || {};
  root.translations = root.translations || {};
  // English pageMeta is embedded directly so en.js is never required
  // at startup — avoids an extra network round-trip for every language.
  root.pageMeta["en"] = {
    "lang": "en",
    "title": "docu.md — AI writes it. docu.md does the rest.",
    "description": "Your AI generates markdown. We handle everything else — preview, format, export to DOCX/PDF/HTML. Cross-platform markdown viewer with rich diagram support."
  };
})();
