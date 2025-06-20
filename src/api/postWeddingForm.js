 import axiosInstance from './axiosInstance';

export const postWeddingForm = async (data) => {
  try {
    const response = await axiosInstance.post('/wed-enquiry', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting wedding form:', error);
    throw error;
  }
};
