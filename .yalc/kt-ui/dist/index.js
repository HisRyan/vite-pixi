(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.BaseComponents = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _config = {
    $t: void 0
  };
  const setUnityGlobalTranslate = ($t) => {
    _config.$t = $t;
  };
  const _t = (...args) => {
    if (_config.$t)
      return _config.$t(...args);
    return "";
  };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "KtDiv",
    setup(__props) {
      console.log(_t("today"));
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(vue.unref(_t)("today")), 1);
      };
    }
  });
  _sfc_main.install = function(app) {
    app.component("KtDiv", _sfc_main);
  };
  exports2.KtDiv = _sfc_main;
  exports2.setUnityGlobalTranslate = setUnityGlobalTranslate;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
