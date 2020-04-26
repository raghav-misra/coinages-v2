/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */
import Vue from 'vue'

declare global {
  namespace JSX {
    interface Element extends Vue.VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

