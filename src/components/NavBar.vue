<template>
    <header>
        <h1>CoinAGES</h1>
        <nav>
            <router-link :to="{ name: 'StarterPage' }">Company Mission</router-link>
            <router-link :to="{ name: 'FactoryPage' }">Flipping Factory</router-link>
            <router-link :to="{ name: 'StockPage' }">Stock Market</router-link>
            <router-link :to="{ name: 'RnDPage' }">R&D Laboratory</router-link>
            <router-link :to="{ name: 'MarketingPage' }">Customer Outreach</router-link>
        </nav>
    </header>
</template>

<style scoped>
nav {
    display: flex;
    padding: 0;
}

header {
    padding: 0.5rem 0;
}

a {
    flex: 1;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0;
    font-weight: thin;
}

.router-link-active {
    background: var(--accent);
}

h1 {
    font-size: 3rem;
}
</style>
