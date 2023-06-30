import axios from 'axios';

const baseURL = 'https://localhost:7083/api';

const http = axios.create({
  baseURL
});

export default http;