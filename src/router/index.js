import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../template/views/home/Home.vue";
import Login from "../template/views/login/Login.vue";
import Clients from "../template/views/clients/Clients.vue";
import Points from "../template/views/points/Points.vue";
import Prizes from "../template/views/prizes/Prizes.vue";
import Redemptions from "../template/views/redemptions/Redemptions.vue";
import Voucher from "../template/views/voucher/Voucher.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { loged: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { loged: false }
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: Clients,
    meta: { loged: true }
  },
  {
    path: "/pontos",
    name: "Pontos",
    component: Points,
    meta: { loged: true }
  },
  {
    path: "/premios",
    name: "Premios",
    component: Prizes,
    meta: { loged: true }
  },
  {
    path: "/resgates",
    name: "Resgates",
    component: Redemptions,
    meta: { loged: true }
  },
  {
    path: "/voucher",
    name: "Voucher",
    component: Voucher,
    meta: { loged: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.loged) && !localStorage.establishmentId) {
    next({ name: 'Login' })
    return;
  }
  next()
})

export default router;
