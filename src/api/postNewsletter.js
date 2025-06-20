 import axiosInstance from './axiosInstance';

// Post subscriber email to newsletter endpoint
export const postNewsletter = async (data) => {
  try {
    const response = await axiosInstance.post('/store-subscriber', data);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
