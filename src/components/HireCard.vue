<template>
    <div class="hire-card">
        <!-- Header -->
        <h2 class="text-left">
            {{ name }}s - ${{ employeeCost / 100 }}
            <button @click="addEmployee">{{ verb }} a {{ name }}</button>    
        </h2>
        <p class="text-left">
            Revenue Rate: 
            <span class="mono no-margin">
                ${{ workerData.revenue / 100 }} per 
                {{ workerData.duration / 1000 }}sec
            </span>
        </p>
        <p class="text-left">
            # of Employees:
            <span class="mono no-margin">
                {{ employeeAmount }} {{ name }}s
            </span>
        </p>
        <hr>

        <!-- Show # of Workers -->
        <h1 v-for="index in employeeAmount" class="d-inline" :key="index"
            :name="name" 
            :revenue="workerData.revenue" 
            :duration="workerData.duration"
        >epic worker counter</h1>

        <!-- Show Message if no Workers -->
        <p v-show="employeeAmount === 0">
            no <b class="no-margin">{{ name }}s</b> yet, 
            {{ verb }} one!
        </p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import WorkerInterval from "@/services/WorkerInterval";

export default Vue.extend({
    data() {
        return {
            employeeAmount: 0,
            employeeCost: this.cost
        };
    },

    props: {
        name: { type: String, required: true },
        verb: { type: String, required: false, default: "build" },
        cost: { type: Number, required: true },
        workerData: { type: Object, required: true },
        priceChange: { type: Number, required: true }
    },
    
    methods: {
        addEmployee() {
            const oldMoney = this.$store.state.money;
            this.$store.commit("cost", this.employeeCost);
            if (this.$store.state.money < oldMoney) {
                this.employeeAmount++;
                this.employeeCost += this.priceChange;
            }
        }
    },
    computed: {
        // This returns the WorkerInterval running the employee type:
        currentWorker(): WorkerInterval {
            // Null check:
            if (!this.$store.state.employeeWorkers[this.name])
                this.$store.commit("createWorker", { ...this.workerData, name: this.name });
            return this.$store.state.employeeWorkers[this.name] as WorkerInterval;
        }
    },
    watch: {
        employeeAmount(amount: number) { this.currentWorker.amount = amount; }
    },
    created() {
        // Null check worker interval:
        if (!this.$store.state.employeeWorkers[this.name])
            this.$store.commit("createWorker", { ...this.workerData, name: this.name });
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