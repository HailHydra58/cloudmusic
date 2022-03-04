import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible"; //关于px转rem的适配包
import VueLazyloadNext from "vue-lazyload-next"; //图片懒加载

createApp(App)
  .use(store)
  .use(router)
  .use(VueLazyloadNext, {
    preLoad: 1.3,
    error: require("./assets/logo.png"),
    loading: require("./assets/logo.png"),
    attempt: 1,
  })
  .mount("#app");
