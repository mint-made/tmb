import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store.js";
import axios from "axios";
import { Auth } from "./firebaseInit";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app;

Auth.onAuthStateChanged(() => {
  console.log("auth state changed");
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
