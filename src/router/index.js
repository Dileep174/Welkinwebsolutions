// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue';
import Hero from '../components/Home/Hero.vue'
// import Header from '../components/Header.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/our-services', name: 'Services', component: Services },
  { path: '/our-projects', name: 'Projects', component: Projects },
  { path: '/about-us', name: 'About', component: About },
  { path: '/testimonials', name: 'Testimonials', component: Testimonials },
  { path: '/contact-us', name: 'Contact', component: Contact },
  { path: '/hero/:id', name: 'Hero', component: Hero, },
  // { path: '/Header', name: 'Header', component: Header },

  // { path: '/Hero/:id', name: 'Hero', component: Hero },

  // Define other static routes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
