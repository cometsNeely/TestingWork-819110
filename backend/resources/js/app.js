require('./bootstrap');

import router from './router';
import Vuex from 'vuex';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

window.Vue = require('vue').default;

//Vue.component('main_page', require('./components/main_page.vue').default);

Vue.use(Vuex);
Vue.use(BootstrapVue);

const store = new Vuex.Store({
    state: {
        //
    },

    mutations: {
        //
    },

    actions: {
        //
    },
});

const app = new Vue({
    el: '#app',
    router,
    store: store,
});
