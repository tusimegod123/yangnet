import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      basicAuth: true,
    },
  },

  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("@/views/Gallery.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/how",
    name: "Work",
    component: () => import("@/views/Work.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/scope",
    name: "ScopeView",
    component: () => import("@/views/ScopeView.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("@/views/Team.vue"),
  },
  {
    path: "/readmore",
    name: "More",
    component: () => import("@/views/ReadMoreView.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/milestone",
    name: "MilestoneView",
    component: () => import("@/views/MilestoneView.vue"),
    meta: {
      basicAuth: true,
    },
  },
  {
    path: "/getinvolved",
    name: "GetInvolved",
    component: () => import("@/views/GetInvolved.vue"),
    meta: {
      basicAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
