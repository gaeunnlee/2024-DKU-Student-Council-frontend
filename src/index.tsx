import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import './index.css';
import { CONSTANTS } from './constant';

axios.defaults.baseURL = CONSTANTS.SERVER_URL;

axios.interceptors.request.use((config) => {
   const token = localStorage.getItem(CONSTANTS.atk_key);
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
