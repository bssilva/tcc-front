import Vue from "vue";
import VueRouter from "vue-router";
import Clients from "../template/views/clients/Clients.vue";
import Points from "../template/views/points/Points.vue";
import Prizes from "../template/views/prizes/Prizes.vue";
import Redemptions from "../template/views/redemptions/Redemptions.vue";

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
  {
    path: "/resgates",
    name: "Resgates",
    component: Redemptions,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
