import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory("/Vue-vuetify-heroes/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        home: true,
      },
    },
    {
      path: "/heroes",
      name: "heroes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HeroesView.vue"),
      meta: {
        privado: true,
      },
    },
    {
      path: "/heroes/:id",
      name: "hero",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HeroView.vue"),
      meta: {
        privado: true,
      },
    },
    {
      path: "/login",
      name: "login",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  let user = auth.currentUser;
  let private_rute = to.meta.privado;
  if (private_rute && !user) {
    next("/login");
  } else if (to.meta.home) {
    next();
  } else if (private_rute == undefined && user) {
    next("/");
  } else {
    next();
  }
});
export default router;
