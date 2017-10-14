import bluebird from 'bluebird';
import './theme/index.css';
import ElementUI from 'element-ui';
import './styles/index.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import zd from './common/util';
import routes from './routes';
import store from './vuex';
import App from './App.vue';
import components from './components';
import VueLazyLoad from 'vue-lazyload';  //图片懒加载

//注册bluebird为全局Promise
window.Promise = bluebird;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(zd);
Vue.use(components);
Vue.use(VueLazyLoad,{
    loading: require('./assets/lazy.jpg')
});

let router = new VueRouter({
    routes:routes
});
router.beforeEach((to, from, next) => {
    next(true);
});
router.afterEach(route => {

});
new Vue({
    el:'#app',
    router:router,
    store:store,
    render: h => h(App)
});