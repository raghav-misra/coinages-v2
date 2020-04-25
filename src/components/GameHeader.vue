<template>
    <header>
        <!-- Logo & Title -->
        <router-link :to="{ name: 'StarterPage' }">
            <h1 class="mono" id="title">
                Coin
                <img id="logo" src="/img/coins/dollar.png">
                AGES
            </h1>
        </router-link>

        <!-- Money Display -->
        <h3 class="font-weight-reg">
            Net Worth:
            <span id="moneyDisp" class="mono thin">
                ${{ money }}
            </span>
        </h3>
    </header> 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    computed: {
        money() { return this.$store.state.money / 100; }
    }
});
</script>

<style scoped>
/* Header Styles */
header { 
    padding: 0;
    padding-bottom: 1rem;
    margin: 0;
    border-bottom: 0.25rem var(--accent) solid;
}

img#logo {
    width: 6.25rem;
    height: 6.25rem;
    margin-left: 1rem;
}

h1#title {
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}

a { 
    text-decoration: none; 
    padding: 0; margin: 0;
}

/* Money Display */
#moneyDisp {
    padding: 0.5rem;
    background: var(--success);
}
</style>