import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import Api from "./api";
import ElementPlus from 'element-plus';

const app = createApp(App);

app.use(router);// router

app.config.globalProperties.$api = Api; // axios

app.use(ElementPlus); // element-plus

app.mount('#app');

