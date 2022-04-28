import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api'

export const api = axios.create({
  baseURL,
  timeout: 1000,
});