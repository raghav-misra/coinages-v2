import { Workbox } from "workbox-window";

let wb: Workbox = null;

if ("serviceWorker" in navigator) {
    wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);

    wb.addEventListener("controlling", () => {
        window.location.reload();
    });

    wb.register();
}

export default wb;
