import Vue from "vue";
import App from "./template/app/App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./config/GlobalComponents";
import "./config/GlobalVariables";
import "./config/VueToasted"
import "./config/V-mask"

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
