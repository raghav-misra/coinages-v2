<template>
    <div class="no-padding">
        <NavBar />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
    components: { NavBar }
});
</script>

<style src="@/assets/reset.css"></style>

