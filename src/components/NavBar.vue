<template>
    <header>
        <h1 class="mono">
            Coin
            <img id="logo" src="@/assets/img/coins/dollar.png">
            AGES
        </h1>
        <br>
        <nav>
            <router-link :to="{ name: 'StockPage' }">Stock Market</router-link>
            <router-link :to="{ name: 'FactoryPage' }">Flipping Factory</router-link>
            <router-link :to="{ name: 'StarterPage' }">Company Mission</router-link>
            <router-link :to="{ name: 'RnDPage' }">R&D Laboratory</router-link>
            <router-link :to="{ name: 'MarketingPage' }">Customer Outreach</router-link>
        </nav>
    </header>
</template>

<style scoped>
#logo {
    width: 7.5rem;
    height: 7.5rem;
    margin-left: 1rem;
}

nav {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    border-top: 2.5px var(--accent) solid;
}

header {
    padding: 0.5rem 0;
}

a {
    flex: 1;
    flex-basis: 12.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0;
    border-bottom: 2.5px var(--accent) solid;
    transition: background 250ms ease-in-out;
}

.router-link-exact-active {
    background: var(--accent);
}

h1 {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
