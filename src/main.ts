import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Space,
  Select,
  TimePicker,
} from "ant-design-vue";
import "@/styles/index.css";
import i18n from "@/local/lang.ts";
import { setUnityGlobalTranslate } from "kt-ui";

const app = createApp(App);
app.use(Button, DatePicker, Form, Input, Space, Select, TimePicker);
app.use(router);
app.use(i18n);
app.directive("role", {
  mounted: (el: any, binding: any) => {
    const { value } = binding;
    el.__originalDisplay__ = getComputedStyle(el).display;
    if (value !== "add") {
      el.style.display = "none";
    }
  },
  updated: (el: any, binding: any) => {
    const { value } = binding;
    if (value !== "add") {
      el.style.display = "none";
    } else {
      el.style.display = el.__originalDisplay__ || ""; // 恢复原始 display 值
    }
  },
});
setUnityGlobalTranslate(i18n.global.t);

app.mount("#app");
