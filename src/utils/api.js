import axios from "axios";

export const products = axios.get('https://test-product-backend.onrender.com/product/')
  .then(response => response.data) 
  .catch(error => {
    console.error('error while fetching data:', error);
    throw error; 
  });