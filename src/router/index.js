import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/layout.vue"),
    children: [
      { path: "", redirect: "/portfolio" },
      {
        path: "/portfolio",
        component: () => import("@/views/portfolio.vue"),
      },
      { path: "/about", component: () => import("@/views/about.vue") },
      {
        path: "/album/:id",
        name: "album",
        component: () => import("@/views/album.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
