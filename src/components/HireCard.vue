<template>
    <div class="hire-card">
        <!-- Header -->
        <h2 class="text-left">
            {{ name }}s - ${{ cost / 100 }}
            <button @click="addWorker">{{ verb }} a {{ name }}</button>    
        </h2>
        <p class="text-left">
            Revenue Rate: 
            <span class="mono no-margin">
                ${{ profit.revenue / 100 }} per 
                {{ profit.duration / 1000 }}sec
            </span>
        </p>
        <p class="text-left">
            # of Employees:
            <span class="mono no-margin">{{ workers }} {{ name }}s</span>
        </p>
        <hr>

        <!-- Show # of Workers -->
        <Worker v-for="index in workers" :key="index"
            :name="name" 
            :revenue="profit.revenue" 
            :duration="profit.duration"
        />

        <!-- Show Message if no Workers -->
        <p v-show="workers === 0">
            no <b class="no-margin">{{ name }}s</b> yet, 
            {{ verb }} one!
        </p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Worker from "@/components/Worker.vue";

const cardData = {
    
}

export default Vue.extend({
    components: { Worker },
    props: {
        name: { type: String, required: true },
        verb: { type: String, required: false, default: "build" },
        cost: { type: Number, required: true },
        profit: { type: Object, required: true }
    },
    data() { 
        return { workers: 0 };
    },
    methods: {
        addWorker() { 
            const oldMoney = this.$store.state.money;
            this.$store.commit("cost", this.cost);

            if (oldMoney > this.$store.state.money) { this.workers++; }
        }
    }
});
</script>

<style scoped>
.hire-card {
    margin: 1rem 0.5rem;
    background: var(--fore);
}

.hire-card *:not(button) {
    color: var(--back);
}
</style>