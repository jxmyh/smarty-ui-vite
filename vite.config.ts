import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';
import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
    // 实现icon图标
    assetFileNames: 'smarty-ui.[ext]', // 资源文件像 字体，图片等
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',

      // formats: ['esm', 'umd', 'iife'],
      formats: ['es', 'umd', 'iife', 'cjs'],
    },
  },
  server: {
    port: 8080,
  },
});
