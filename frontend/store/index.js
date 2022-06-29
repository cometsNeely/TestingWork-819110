import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import apiPictures from './modules/api.pictures.js'
import apiComments from './modules/api.comments.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Vuex)

const getInitialState = () => {
  return {
    pictures: [],
    comments: []
  }
}

const store = () => new Vuex.Store({
  state: getInitialState(),
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    apiPictures,
    apiComments
  }
})

export default store
