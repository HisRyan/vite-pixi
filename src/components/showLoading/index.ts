/*
 * @create: by haojie.Li
 * @Date: 2024-12-02 13:52:44
 * @For:
 */
import { createApp, defineComponent, h, ref } from "vue";
import { styled } from "@vue-styled-components/core";
import { LoadingOutlined } from "@ant-design/icons-vue";

const ModalRootDiv = styled("div")`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingContainer = defineComponent({
  props: {
    title: String,
  },
  setup(_, context) {
    const showTitle = () => {
      console.log(222);
    };
    const daw = ref(2);
    context.expose({ showTitle, daw });
    return {
      daw,
      showTitle,
    };
  },
  render() {
    return h(ModalRootDiv, {}, () => [h(LoadingOutlined, {})]);
  },
});

const loadingDivs = new WeakMap(); // 使用 WeakMap 存储挂载的 div

export function showLoading(contain?: any) {
  const app = createApp(loadingContainer, {
    props: {
      title: "222",
    },
  });
  app.config.errorHandler = () => {};
  if (contain) {
    loadingDivs.set(contain, app); // 将 contain 和 app 关联
    const vm = app.mount(contain) as InstanceType<typeof loadingContainer>;
    debugger;
    console.log(vm.daw);
    vm?.showTitle();
    return;
  }
  const div = document.createElement("div");
  div.id = "app_loading";
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  document.body.appendChild(div);
  loadingDivs.set(div, app); // 将 div 和 app 关联
  app.mount(div);
}

export const hideLoading = (contain?: any) => {
  if (contain) {
    const app = loadingDivs.get(contain); // 获取对应的 app
    if (app) {
      app.unmount(); // 卸载 app
    }
  } else {
    const loadingDiv = document.querySelector("#app_loading"); // 获取默认的 loading div
    if (loadingDiv) {
      loadingDiv.remove(); // 移除 loading div
    }
  }
};
