import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q={0}');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
