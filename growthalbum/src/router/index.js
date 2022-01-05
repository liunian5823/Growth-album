import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "index",
    component: () =>
      import("../views/index.vue"),
  },
  {
    path: "/xiangqing",
    name: "xiangqing",
    component: () =>
      import("../views/xiangqing.vue"),
  },
  {
    path: "/s1",
    name: "s1",
    component: () =>
      import("../views/shangchuangceshi.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
