// axiosInstance.js
import axios from 'axios';

/**
 * Axios instance configured for making HTTP requests to the WordPress REST API.
 * 
 * @constant
 * @type {AxiosInstance}
 * @property {string} baseURL - The base URL for the WordPress REST API.
 * @property {number} timeout - The request timeout in milliseconds.
 * @property {Object} headers - The default headers for the HTTP requests.
 * @property {string} headers.Content-Type - The content type for the HTTP requests.
 */
const axiosInstance = axios.create({
	baseURL: 'https://onestep4ward.com/wp-json/wp/v2/',
	// baseURL: 'https://wptavern.com/wp-json/wp/v2/',
	timeout: 5000, 
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
