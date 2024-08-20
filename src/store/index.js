// src/store/index.js
import { createStore } from 'vuex';
import emailModule from './modules/email';
import projectModule from './modules/projectForm'
import dataModule from './modules/data';

export default createStore({
  modules: {
    email: emailModule,
    projectForm: projectModule,
    data: dataModule
  },
  
});
