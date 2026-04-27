import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blogDhaBrainDevelopment: resolve(__dirname, 'blog/dha-brain-development/index.html'),
        blogPickyEatersVegetables: resolve(__dirname, 'blog/picky-eaters-vegetables/index.html'),
        blogHiddenSugarsKidsDrinks: resolve(__dirname, 'blog/hidden-sugars-kids-drinks/index.html'),
        blogLactoseIntoleranceChildren: resolve(__dirname, 'blog/lactose-intolerance-children/index.html'),
        blogReadingNutritionLabels: resolve(__dirname, 'blog/reading-nutrition-labels/index.html'),
      },
    },
  },
});
