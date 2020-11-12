import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store.js";
import firebase from "firebase/app";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
