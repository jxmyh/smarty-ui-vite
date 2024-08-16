import { createApp } from 'vue';

import SButton from './button';
// 去除红色提示
// 在src 目录下创建 shims-vue.d.ts 文件 并且写入内容
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';

createApp(JSXButton).mount('#app');
