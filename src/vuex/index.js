import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import state from './states';
import action from './action';
import getter from './getter';
Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations,
    action,
    getter
});
export default store;