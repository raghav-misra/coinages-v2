<template>
    <div>
        <h1 class="font-weight-reg">
            Location:<span class="font-weight-bold">Factory</span>
        </h1>

        <PlayerCoin />

        <br><span>Click the coin to start earning!</span><hr>

        <h2>Employees:</h2>
        
        <HireCard
            name="human" :cost="100" verb="hire"
            :workerData="{ revenue: 1, duration: 1000 }"
            :priceChange="10"
        />
        
        <HireCard
            name="robot" :cost="200" verb="build"
            :workerData="{ revenue: 3, duration: 1000 }"
            :priceChange="15"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerCoin from "@/components/PlayerCoin.vue";
import HireCard from "@/components/HireCard.vue";

export default Vue.extend({
    components: { PlayerCoin, HireCard }
});
</script>

<style scoped>
</style>