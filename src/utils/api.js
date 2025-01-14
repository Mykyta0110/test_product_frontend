import axios from "axios";

export const products = axios.get('http://127.0.0.1:8000/product/')
  .then(response => response.data) 
  .catch(error => {
    console.error('error while fetching data:', error);
    throw error; 
  });