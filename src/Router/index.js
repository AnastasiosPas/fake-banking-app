import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home';
import Accounts from '../views/Accounts';



const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home
    },
    {
        path: '/accounts',
        name: 'Accounts',
        component: Accounts
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;