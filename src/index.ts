import { createApp } from 'vue/dist/vue.esm-browser.js';
import SmartyUI from './entry';
// import SButton from './button';
// 去除红色提示
// 在src 目录下创建 shims-vue.d.ts 文件 并且写入内容
// import SFCButton from './SFCButton.vue';
// import JSXButton from './JSXButton';

// createApp(JSXButton).mount('#app');

createApp({
  template: `
  <div>
    <SButton color="blue">蓝色按钮</SButton>
    <SButton color="green">绿色按钮</SButton>
    <SButton color="gray">灰色按钮</SButton>
    <SButton color="yellow">黄色按钮</SButton>
    <SButton color="red">红色按钮</SButton>
  </div>
  `,
})
  .use(SmartyUI)
  .mount('#app');
