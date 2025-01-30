// useFetchPosts.js
import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const useFetchPosts = (url) => {
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

export default useFetchPosts;