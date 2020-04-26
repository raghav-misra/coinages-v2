<template>
    <div>
        <h1 class="font-weight-reg">
            Location:<span class="font-weight-bold">Factory</span>
        </h1>

        <PlayerCoin />

        <br><span>Click the coin to start earning!</span><hr>

        <h2>Employees:</h2>
        
        <div v-for="(employee, i) in unlockedEmployees" :key="i">
            <HireCard
                :name="employee.name" :verb="employee.verb"
                :cost="employee.cost" :priceChange="employee.priceChange"
                :workerData="employee.workerData"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlayerCoin from "@/components/PlayerCoin.vue";
import HireCard from "@/components/HireCard.vue";

export default Vue.extend({
    components: { PlayerCoin, HireCard },
    data() {
        return {
            unlockedEmployees: [
                {
                    name: "human",
                    verb: "hire",
                    cost: 100,
                    priceChange: 10,
                    workerData: { revenue: 1, duration: 1000 }
                },
                {
                    name: "robot",
                    verb: "build",
                    cost: 200,
                    priceChange: 20,
                    workerData: { revenue: 3, duration: 1000 }
                }
            ]
        };
    }
});
</script>