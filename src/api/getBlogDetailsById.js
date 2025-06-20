 import axiosInstance from './axiosInstance';

// Fetch room details
export const getBlogDetailsById = async (slug) => {
  try {
    // Use the slug parameter in the URL instead of a placeholder
    const response = await axiosInstance.get(`/blog-details/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching room details:', error);
    throw error;
  }
};