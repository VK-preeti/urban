import axiosInstance from './axiosInstance';

// Post subscriber email to newsletter endpoint
export const postEnquiryRoom = async (data) => {
  try {
    const response = await axiosInstance.post('/checkin-store', data);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};