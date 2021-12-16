import axios from 'axios';

const SERVER_URL = "https://api.ytabc.com/"; // Example http://localhost:4941/api/v1/

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000
});

export default {
    getInfo: () => instance.get('home/mainNavigation'),
}