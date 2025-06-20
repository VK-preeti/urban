// // src/api/weddingAPI.js
import axiosInstance from './axiosInstance';

// Fetch wedding packages
export const getAboutus = async () => {
  try {
    const response = await axiosInstance.get('/get-about');
    return response.data;
    console.log("response data about us=============>", response );
  } catch (error) {
    console.error('Error fetching wedding packages:', error);
    throw error;
  }
};


// error 429 part resolve
// src/api/weddingAPI.js


// import axiosInstance from './axiosInstance';
// import axiosRetry from 'axios-retry';

// // Apply retry logic to your axios instance
// axiosRetry(axiosInstance, {
//   retries: 3, // Retry 3 times if request fails
//   retryDelay: (retryCount) => {
//     return retryCount * 2000; // Wait 2s, 4s, 6s between retries
//   },
//   retryCondition: (error) => {
//     // Retry only if status code is 429 or 5xx (server errors)
//     return error.response && (error.response.status === 429 || error.response.status >= 500);
//   }
// });

// // Fetch about us data
// export const getAboutus = async () => {
//   try {
//     const response = await axiosInstance.get('/get-about');
//     console.log("Response data about us =============>", response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching about us:', error);
//     throw error;
//   }
// };
