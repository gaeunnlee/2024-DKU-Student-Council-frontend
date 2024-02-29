import axios from 'axios';
import { CONSTANTS } from 'constants/api';

export const client = axios.create({
   baseURL: CONSTANTS.SERVER_URL,
});
