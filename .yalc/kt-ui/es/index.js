import { defineComponent, openBlock, createElementBlock, toDisplayString, unref } from "vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KtDiv",
  setup(__props) {
    console.log(_t("today"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, toDisplayString(unref(_t)("today")), 1);
    };
  }
});
_sfc_main.install = function(app) {
  app.component("KtDiv", _sfc_main);
};
export {
  _sfc_main as KtDiv,
  setUnityGlobalTranslate
};
