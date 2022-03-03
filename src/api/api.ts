import axios from 'axios';
import { REACT_APP_API_URL } from '../constants/constants';

const api = axios.create({ baseURL: REACT_APP_API_URL });

export default api;
