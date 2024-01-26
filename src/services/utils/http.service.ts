import axios from 'axios';

const baseURL = 'http://127.0.0.1:8989';

const http = axios.create({
  baseURL
});

export default http;