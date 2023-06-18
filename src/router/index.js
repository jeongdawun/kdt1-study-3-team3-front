import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import accountRoutes from './account'
import productRoutes from "./product";
import loanRoutes from "./loan"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...accountRoutes,
  ...productRoutes,
  ...loanRoutes
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
