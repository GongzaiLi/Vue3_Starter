import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import Api from "./api"

const app = createApp(App);

app.use(router);// router

app.config.globalProperties.$api = Api;

app.mount('#app');

