// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue';
import Hero from '../components/Home/Hero.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/our-services', name: 'Services', component: Services },
  { path: '/our-projects', name: 'Projects', component: Projects },
  { path: '/about-us', name: 'About', component: About },
  { path: '/testimonials', name: 'Testimonials', component: Testimonials },
  { path: '/contact-us', name: 'Contact', component: Contact },
  { path: '/hero', name: 'Hero', component: Hero, },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
