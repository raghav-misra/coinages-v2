<template>
    <div class="no-padding" id="app">
        <!-- Logo & Title -->
        <header>
            <router-link :to="{ name: 'StarterPage' }">
                <h1 class="mono" id="title">
                    Coin
                    <img id="logo" src="@/assets/img/coins/dollar.png">
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

        <!-- Home Button -->
        <HomeButton />

        <!-- Current Page -->
        <div id="current-view">
            <transition name="slide">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

import HomeButton from "@/components/HomeButton.vue";

export default Vue.extend({
    computed: {
        money() { return this.$store.state.money / 100; }
    },
    methods: {
        profit() { this.$store.commit("profit"); }
    },
    components: { HomeButton }
});
</script>

<style src="@/assets/css/reset.css"></style>

<style scoped>
/* Header Styles */
header { 
    padding: 0;
    padding-bottom: 1rem;
    margin: 0;
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
    border-radius: 2rem; 
}

/* SPA Styles */
#current-view {
    padding: 0; margin: 0;
    position: relative;
}

#current-view > section {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
}

/* Slide between pages */
.slide-enter-active, .slide-leave-active { transition: transform 1s ease-in-out, opacity 1s ease-in-out; }

.slide-enter, .slide-leave-to { transform: rotateY(-90deg); opacity: 0;  }

.slide-enter-to, .slide-leave { transform: rotateY(0); opacity: 1; }
</style>

