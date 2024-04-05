import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { registerPlugins } from '@/plugins';
import 'tailwindcss/tailwind.css'

// Cria a instância do app
const app = createApp(App);

// Registra o router
app.use(router);

// Registra outros plugins
registerPlugins(app);

// Monta a aplicação
app.mount('#app');
