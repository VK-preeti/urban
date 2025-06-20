 import axiosInstance from './axiosInstance';

// Fetch room details
export const getRoomDetailsSimilar = async (slug) => {
  try {
    // Use the slug parameter in the URL instead of a placeholder
    const response = await axiosInstance.get(`/room-details/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching room details:', error);
    throw error;
  }
};