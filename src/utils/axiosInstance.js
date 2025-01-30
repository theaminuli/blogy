// axiosInstance.js
import axios from 'axios';

// Create a custom Axios instance with a base URL and configuration
const axiosInstance = axios.create({
	baseURL: 'https://onestep4ward.com/wp-json/wp/v2/',
	timeout: 5000, 
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
