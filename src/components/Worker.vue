<template>
    <div class="d-inline-block">
        I am {{ name }} and 
        I make ${{ revenue / 100 }} 
        every {{ duration / 1000 }} secs.
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        name: { type: String, required: true },
        revenue: { type: Number, required: true },
        duration: { type: Number, required: true }
    }
});
</script>

<style scoped>
</style>