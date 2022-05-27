import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.config.silent = true;

// 上传到dev分支

new Vue({
  render: (h) => h(App),
}).$mount("#app");
