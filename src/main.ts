import './assets/main.css'

import { createApp, defineEmits } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App);
app.config.globalProperties.emits = defineEmits;
app.mount('#app');
