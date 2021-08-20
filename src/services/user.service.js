import axios from 'axios';
import authHeader from './auth-header';
import API_ROOT from '../constantes/api';

const API_URL = API_ROOT;

const getUserProfile = (userid) => axios.get(`${API_URL}users/${userid}`, { headers: authHeader() });

const getAdminBoard = () => axios.get(`${API_URL}admin/`, { headers: authHeader() });

export default {
  getUserProfile,
  getAdminBoard,
};
