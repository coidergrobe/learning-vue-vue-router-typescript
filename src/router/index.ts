import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Item = () => import("../views/Items.vue");
const Details = () => import("../views/Details.vue");

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/items",
    name: "item",
    component: Item,
  },
  {
    path: "/items/:id/details",
    name: "details",
    component: Details,
  },
  {
    path: "*",
    name: "Item",
    component: Item,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
