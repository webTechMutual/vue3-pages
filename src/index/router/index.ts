import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "usage",
    component: () => import("../components/CircularProgress.vue"),
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});