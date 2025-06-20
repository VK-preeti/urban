import axiosInstance from './axiosInstance';

// Fetch wedding packages
export const getTopHeader = async () => {
  try {
    const response = await axiosInstance.get('/top-header');
    return response.data;
    // console.log("response data about us=============>", response );
  } catch (error) {
    console.error('Error fetching wedding packages:', error);
    throw error;
  }
};