import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './assets/js/plugins';
// import './assets/js/theme';

createApp(App)
.use(router)
.use(store)
.mount('#app');
