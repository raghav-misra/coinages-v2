<template>
    <img 
        @click="profit" @contextmenu.prevent="profit"
        :src="coinImage" alt="Click to make money!" 
        :style="{ transform: 'rotateX(' + rotationDeg + 'deg) perspective(500px)' }"
    />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() { return { rotationDeg: 0 }; },
    computed: {
        coinImage() { return `/img/coins/${this.$store.state.currentCoin}.png`; }
    },
    methods: {
        profit() {
            // Add to money:
            this.$store.commit("profit");

            this.rotationDeg += 180;
        }
    }
});
</script>

<style scoped>
img {
    user-select: none;
    padding: 0;
    margin: 0;
    width: 12.5rem;
    height: 12.5rem;
    transition: transform 0.75s ease-in-out;
}
</style>