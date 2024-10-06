import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
let app = null;
let isAuthChecked = false;
onAuthStateChanged(auth, (user) => {
  if (!isAuthChecked) {
    isAuthChecked = true;
    const app = createApp(App);
    app.use(store);
    app.use(vuetify);
    app.use(router);
    app.mount("#app");
  }
});
