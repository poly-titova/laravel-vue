import svg4everybody from 'svg4everybody'

import '@/app/sass/index.scss';

import { createApp } from 'vue';
import App from '@/app/components/App.vue';

//Подключаем, чтобы на vite dev корректно грузились иконки
svg4everybody({
    polyfill: true
});

const app = createApp(App)
    .mount('#app')
