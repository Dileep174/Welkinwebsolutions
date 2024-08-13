// src/store/index.js
import { createStore } from 'vuex';
import emailModule from './modules/email';
import dataModule from './modules/data';

export default createStore({
  modules: {
    email: emailModule,
    data: dataModule
  },
  
});
