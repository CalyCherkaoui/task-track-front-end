import axios from 'axios';
import apiBackendUrl from '../constants/apiUrl';

const postRequest = async (path, params, headers) => {
  // const data = {
  //   username: params.username,
  //   email: params.email,
  //   password: params.password,
  // };
  const result = await axios.post(`${apiBackendUrl}/${path}`, params, headers);
  return result;
};

const getRequest = async (path) => {
  const result = await axios.get(`${apiBackendUrl}/${path}`);
  return result;
};

const deleteRequest = async (path) => {
  const result = await axios.delete(`${apiBackendUrl}/${path}`);
  return result;
};

export { postRequest, getRequest, deleteRequest };
