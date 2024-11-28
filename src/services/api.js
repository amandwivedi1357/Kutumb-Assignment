import axios from 'axios';

const BASE_URL = 'https://assignment.stage.crafto.app';
const MEDIA_URL = 'https://crafto.app/crafto/v1.0/media/assignment';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (token) {
    config.headers.Authorization = token; // Ensure "Bearer" is included
  }

  return config;

});

export const login = async (username, otp) => {
  const response = await api.post('/login', { username, otp });
  return response.data;
};

export const getQuotes = async (limit, offset) => {
 
  let url = '/getQuotes'
  if(limit && offset){
    url = `/getQuotes?limit=${limit}&offset=${offset}`
  }
  const response = await api.get(url);

  return response.data.data;
};

export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${MEDIA_URL}/upload`, formData);
  console.log(response.data);
  return response.data;
};

export const createQuote = async (text, mediaUrl) => {
  const response = await api.post('/postQuote', { text, mediaUrl });
  console.log(response.data);
  return response.data;
};