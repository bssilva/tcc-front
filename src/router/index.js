import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../template/views/clients/Clients.vue";
import Points from "../template/views/points/Points.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/clientes",
    name: "Clientes",
    component: Clients,
  },
  {
    path: "/pontos",
    name: "Pontos",
    component: Points,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
