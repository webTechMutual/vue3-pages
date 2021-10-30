import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "usage",
    component: () => import("../components/CircularProgress.vue"),
  },
  {
    path: "/popover",
    name: "usage",
    component: () => import("../components/Popover.vue"),
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});