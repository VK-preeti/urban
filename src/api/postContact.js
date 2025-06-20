import axiosInstance from './axiosInstance';

// Post subscriber email to newsletter endpoint
export const postConatct = async (data) => {
  try {
    const response = await axiosInstance.post('/save-contact', data);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};