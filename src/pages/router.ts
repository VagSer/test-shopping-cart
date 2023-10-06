import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {path: '/', component: () => import('./HomePage.vue')},
    {path: '/cart', component: () => import('./CartPage.vue')},
    {path: '/shop', component: () => import('./ShopPage.vue')},
    { path: '/:pathMatch(.*)*', component: () => import('./ErrorPage.vue') },
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})