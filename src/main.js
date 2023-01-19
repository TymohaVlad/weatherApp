import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

createApp(App).mount('#app')


const routes = [
	{
		path: '/',
		name: 'products',
		component: Products
	},
    {
        path: '/billPage',
        name: 'BillPage',
        component: BillPage
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;