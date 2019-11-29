import apiService from './apiService';

const client = new apiService({});

const itemsApi = {
  getAllItems: async () => {
    try {
      const response = await client.get(`/items`);
      return response;
    } catch (e) {
      return false;
    }
  },
  getItemById: async id => {
    try {
      const response = await client.get(`/items/${id}`);
      return response;
    } catch (e) {
      return false;
    }
  },
  getAllCategories: async () => {
    try {
      const response = await client.get(`/categories`);
      return response;
    } catch (e) {
      return false;
    }
  }
};

export default itemsApi;