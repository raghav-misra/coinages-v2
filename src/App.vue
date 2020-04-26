<template>
    <div class="no-padding" id="app">
        <!-- Header -->
        <GameHeader />

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
import GameHeader from "@/components/GameHeader.vue";

export default Vue.extend({
    components: { HomeButton, GameHeader },

    created() {
        // PWA Setup Hacks:
        if ((this as any).$workbox) {
            (this as any).$workbox.addEventListener("waiting", () => {
                (this as any).showUpgradeUI = true;
            });
        }
    },

    methods: {
        async accept() {
            (this as any).showUpgradeUI = false
            await (this as any).$workbox.messageSW({ type: "SKIP_WAITING" });
        }
    }
});
</script>

<style src="@/assets/css/reset.css"></style>

<style scoped>
/* Slide between pages */
.slide-enter-active, .slide-leave-active { transition: transform 1s ease-in-out, opacity 1s ease-in-out; }

.slide-enter, .slide-leave-to { transform: rotateY(-90deg); opacity: 0;  }

.slide-enter-to, .slide-leave { transform: rotateY(0); opacity: 1; }
</style>

