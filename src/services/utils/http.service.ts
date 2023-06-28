import axios from 'axios';

const baseURL = 'https://localhost:7083/api';

const http = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default http;