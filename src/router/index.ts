import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import FactoryPage from "@/views/FactoryPage.vue";
import StocksPage from "@/views/StocksPage.vue";
import RnDPage from "@/views/RnDPage.vue";
import MarketingPage from "@/views/MarketingPage.vue";
import StarterPage from "@/views/StarterPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        name: "FactoryPage",
        path: "/factory",
        component: FactoryPage
    },
    {
        name: "StockPage",
        path: "/stocks",
        component: StocksPage
    },
    {
        name: "RnDPage",
        path: "/laboratory",
        component: RnDPage
    },
    {
        name: "MarketingPage",
        path: "/marketing",
        component: MarketingPage
    },
    {
        name: "StarterPage",
        path: "/",
        component: StarterPage
    },
    {
        redirect: { name: "StarterPage" },
        path: "*"
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
