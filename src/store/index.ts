import Vuex from "vuex";
import Vue from "vue";

import WorkerInterval from "@/services/WorkerInterval";

Vue.use(Vuex);

const coinValues: Record<string, number> = {
    penny: 1,
    nickel: 5, 
    dime: 10,
    quarter: 25,
    halfDollar: 50,
    dollar: 100,
    world: 10000
}



const store = new Vuex.Store({
    state: {
        money: 0,   
        currentCoin: "penny",
        employeeWorkers: Object.create(null) as Record<string, WorkerInterval>,
        unlockedEmployees: [] as IEmployeeConfig[]
    },
    mutations: {
        profit(state, amount?: number) {
            if (typeof amount === "number") state.money += amount;
            else state.money += coinValues[state.currentCoin]; 
        },

        cost(state, amount: number) { 
            const newValue = state.money - amount; 
            if (newValue < 0)
                alert("The transaction cannot be completed or else you would fall in debt.");
            else state.money -= amount; 
        },

        loss(state, amount: number) {
            state.money -= amount; 
        },

        changeCoin(state, newCoin: string) { state.currentCoin = newCoin; },

        addEmployee(state, name: string) {
            state.employeeWorkers[name].addEmployee();
        },

        createWorker(state, { name, revenue, duration }: Record<string, number>) {
            state.employeeWorkers[name] = new WorkerInterval(revenue, duration);
            state.employeeWorkers[name].startWork();
        }
    }
});

export default store;