import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import "./registerServiceWorker";

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

// Debugging:
(window as unknown as Record<string, unknown>)._store = () => store;
