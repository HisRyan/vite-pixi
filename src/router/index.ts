import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/pages/Home/Home.vue"),
        meta: { title: "login" },
      },
      {
        path: "start",
        name: "start",
        component: () => import("@/pages/Start/Start.vue"),
        meta: { title: "login" },
      },
      {
        path: "fish",
        name: "fish",
        component: () => import("@/pages/Fish/Fish.vue"),
        meta: { title: "login" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
