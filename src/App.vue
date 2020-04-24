<template>
    <div>
        <h1>Current Money: {{ money }}</h1>
        <button @click="profit(4)">Add Money</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    computed: {
        money() { return this.$store.state.money; }
    },
    methods: {
        profit(amount?: number) {
            this.$store.commit("profit", amount);
        }
    }
});
</script>

<style></style>
