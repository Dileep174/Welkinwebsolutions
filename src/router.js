import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Page from './components/Page.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: Page,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
