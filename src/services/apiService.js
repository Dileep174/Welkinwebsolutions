// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchPageById = async (id) => {
  const response = await api.get(`/pages/${id}`);
  return response.data;
};

export const fetchAllPages = async () => {
  const response = await api.get('/service');
  return response.data;
};
