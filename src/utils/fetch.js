import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ' https://app.wewantwaste.co.uk/api';

export const get = async (url) => {
  const response = await axios.get(`${API_BASE_URL}/${url}`);
  return response.data;
};