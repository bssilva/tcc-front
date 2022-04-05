import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../template/views/clients/Clients.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/clientes",
    name: "Clientes",
    component: Clients,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
