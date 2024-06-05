// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/testimonials', name: 'Testimonials', component: Testimonials },
  { path: '/contact', name: 'Contact', component: Contact },

  // Define other static routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
