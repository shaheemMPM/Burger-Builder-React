import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-8bc7e.firebaseio.com/'
});

export default instance;
