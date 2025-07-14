import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://www.theurbanescape.in/laravel/api',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // <-- Needed for cookies or auth
});

export default axiosInstance;