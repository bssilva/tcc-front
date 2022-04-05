import Vue from "vue";
import App from "./template/app/App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./config/GlobalComponents";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
