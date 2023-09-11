import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browsers';
import axios from 'axios';
import { CONSTANTS } from './constants';

if (process.env.NODE_ENV === 'development') {
   worker.start();
}

axios.defaults.baseURL = CONSTANTS.BASE_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
