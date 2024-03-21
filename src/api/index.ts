import { CONSTANTS } from '@constants/api';
import axios from 'axios';

export const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
});
