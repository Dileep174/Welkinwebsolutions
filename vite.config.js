import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // other configurations...
  compilerOptions: {
    isCustomElement: (tag) => {
      return ['p',].includes(tag); // add more elements as needed
    },
  },
});