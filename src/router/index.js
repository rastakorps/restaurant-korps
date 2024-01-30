import { createRouter,  createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'orders',
            component: () => import('../views/orders/OrdersIndex.vue')
        },
        {
            path: '/dishes',
            name: 'dishes',
            component: () => import('../views/dishes/DishesIndex.vue')
        },
        {
            path: '/drinks',
            name: 'drinks',
            component: () => import('../views/drinks/DrinksIndex.vue')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('../views/users/UsersIndex.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        }
    ]
});

export default router;