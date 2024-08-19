import { App } from 'vue';
import SButton from './button';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';

export { SButton, SFCButton, JSXButton };
console.log('SButton', SButton.name);
export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    // app.component(SFCButton.name, SFCButton)
    // app.component(JSXButton.name, JSXButton);
  },
};
