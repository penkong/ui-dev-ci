import Vue from "vue";
import axios from 'axios';
import VueRouter from "vue-router";
import VueAxios from 'vue-axios'
import Safa from 'safa-grid-on-one';
import VModal from 'vue-js-modal'

import routes from "./routes";

Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
    dynamicDefaults: {
        clickToClose: false
    }
})
Vue.use(VueAxios, axios);
Vue.use(Safa);
Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function( /* { store, ssrContext } */ ) {
    const Router = new VueRouter({
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes,

        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    });

    return Router;
}