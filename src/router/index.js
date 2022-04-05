import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../template/views/clients/Clients.vue";
import Points from "../template/views/points/Points.vue";
import Prizes from "../template/views/prizes/Prizes.vue";

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
  {
    path: "/premios",
    name: "Premios",
    component: Prizes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
