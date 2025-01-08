// src/axiosInstance.js
import axios from 'axios';

const publicService = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // Replace with your API base URL
  timeout: 10000, // Optional: request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

// Optional: Add request and response interceptors if needed
publicService.interceptors.request.use(
  (config) => {
    // You can add custom request logic here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

publicService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default publicService;
