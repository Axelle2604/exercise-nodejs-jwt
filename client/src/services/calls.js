import axios from 'axios';

export const postAuth = async (username, password) => {
  const { data } = await axios.post('/auth/login', { username, password });
  return data;
};

export const getAuth = async () => {
  const response = await axios.get('/user/info', {
    headers: { Authorization: 'bearer ' + localStorage.getItem('token') },
  });
  return response;
};
