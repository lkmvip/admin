import empty from './empty.vue';
import pagination from './xf-pagination.vue';

let arr = [
    empty,
    pagination
];

export default {
    install(Vue){
        arr.map(item => {
            Vue.component(item.name,item);
        });
    }
}