import store from "@/store";

export default class WorkerInterval {
    revenue: number;
    duration: number;
    amount = 0;

    constructor(revenue: number, duration: number) {
        this.revenue = revenue;
        this.duration = duration;
    }

    _work() { store.commit("profit", (this.revenue * this.amount)); }

    startWork() { setInterval(this._work.bind(this), this.duration); }

    addEmployee() { this.amount++; }
}