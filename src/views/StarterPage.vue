<template>
    <section class="no-padding">
        <router-link :to="{ name: 'FactoryPage' }">Factory <i class="fas fa-building"></i></router-link>
        <router-link :to="{ name: 'RnDPage' }">Laboratory <i class="fas fa-flask"></i></router-link>
        <router-link :to="{ name: 'StockPage' }">Wall Street <i class="fas fa-traffic-light"></i></router-link>
        <router-link :to="{ name: 'MarketingPage' }">Marketing <i class="fas fa-ad"></i></router-link>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex: 1;
    flex-direction: column;
}

a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    text-decoration: none;
    padding: 1rem;
    margin: 0;
    transition: background 250ms ease-in-out;
}

a:hover { background: var(--accent); }
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    computed: {
        money() { return this.$store.state.money / 100; }
    },
    methods: {
        profit() { this.$store.commit("profit"); }
    }
});
</script>