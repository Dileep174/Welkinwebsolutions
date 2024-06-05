// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost/wp/welkin-wp/wp-json/wp/v2';

export const fetchPages = async () => {
  const response = await axios.get(`${API_BASE_URL}/pages`);
  return response.data;
};

export const fetchMenuItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/pages`);
  return response.data;
};

export const fetchPageById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/pages/${id}`);
  return response.data;
};



// Add more methods for other endpoints if needed
