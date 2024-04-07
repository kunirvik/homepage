import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    // Сюда включите зависимости, которые вы хотите оптимизировать
    include: [
      'gsap',
      'gsap/ScrollTrigger' // Если вы используете ScrollTrigger
    ],
  },
});
