<template>
    <div>
        <h1 class="font-weight-reg">
            Location:<span class="font-weight-bold">Factory</span>
        </h1>

        <PlayerCoin />

        <br><span>Click the coin to start earning!</span><hr>

        <h2>Employees:</h2>
        
        <HireCard
            :name="'Human'" :cost="100"
            :profit="{ amount: 1, ms: 1000 }"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerCoin from '@/components/PlayerCoin.vue';

export default Vue.extend({
    components: { PlayerCoin }
});
</script>

<style scoped>
</style>