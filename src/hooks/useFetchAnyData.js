// useFetchPosts.js
import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

/**
 * Custom hook to fetch data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} An object containing the fetched data, loading state, and error state.
 * @returns {Array} data - The fetched data.
 * @returns {boolean} loading - The loading state.
 * @returns {Error|null} error - The error state, if any.
 */
const useFetchAnyData = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get(url); // Use axiosInstance for requests
				setData(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetchAnyData;