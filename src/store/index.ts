import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const coinValues: Record<string, number> = {
    penny: 1,
    nickel: 5, 
    dime: 10,
    quarter: 25,
    halfDollar: 50,
    dollar: 100,
    world: 1000
}

const store = new Vuex.Store({
    state: {
        money: 0,   
        currentCoin: "penny"
    },
    mutations: {
        profit(state, amount?: number) {
            if (amount) state.money += amount as number;
            else state.money += coinValues[state.currentCoin]; 
        },

        cost(state, amount: number) { 
            const newValue = state.money - amount; 
            if (newValue < 0) {
                alert("The transaction cannot be completed or else you would fall in debt.");
                return false;
            }
            else { 
                state.money -= amount; 
                return true;  
            }
        },
        loss(state, amount: number) {
            state.money -= amount; 
        },
        changeCoin(state, newCoin) { state.currentCoin = newCoin; }
    }
});

export default store;