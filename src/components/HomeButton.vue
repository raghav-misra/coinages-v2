<template>
    <div>
        <router-link :to="{ name: 'StarterPage' }" title="Go Home">
            <i class="fas fa-home"></i>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
div {
    height: 100%;
    position: fixed;
    top: 0; left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 69;
    pointer-events: none;
}

a {
    font-size: 1.5rem;
    border: 2px var(--fore) solid;
    border-radius: 50%;
    pointer-events: auto;
    padding:  0.25rem 0.125rem;
    background: var(--back);transition: background 250ms ease-in-out;
}

a:hover { background: var(--accent); }
</style>