import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Questionnaire from "../views/Questionnaire.vue";
import QuestionnaireComplete from "../views/Questionnaire-Complete.vue";
import Register from "../views/Register.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/questionnaire",
    name: "Questionnaire",
    component: Questionnaire,
    meta: { requiresAuth: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/questionnaire-complete",
    name: "Questionnaire-Complete",
    component: QuestionnaireComplete,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("requiresAuth", requiresAuth, "isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
