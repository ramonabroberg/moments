import axios from 'axios';

axios.defaults.baseURL = 'https://drf-api-rb-b449fd56fdb1.herokuapp.com'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;