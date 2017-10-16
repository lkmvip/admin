import home from './views/home.vue';
import table from './views/examples/table.vue';
import form from './views/examples/form.vue';
import charts from './views/examples/chart.vue';

export default [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/home/table',
        children: [{
            meta: {
                name: '表格'
            },
            path: 'table',
            name: 'table',
            component: table
        }, {
            meta: {
                name: '表单'
            },
            path: 'form',
            name: 'form',
            component: form
        }, {
            meta: {
                name: '图表'
            },
            path: 'charts',
            name: 'charts',
            component: charts
        }]
    }
]