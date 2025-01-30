/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { axiosInstance } from '../utils';
import useAppContext from './useAppContext';

/**
 * Custom hook to fetch posts with infinite scroll.
 *
 * @param {string} url - The URL for fetching posts.
 * @returns {Object} - Contains the fetched posts, loading status, error, and the reference for the infinite scroll.
 *
 * @example
 * const { postsList, postsLoading, postsHasMore, error, loadMoreRef } = useFetchPosts(url);
 */
const useFetchPosts = (url) => {
	const { state, dispatch } = useAppContext();
	const { postsList, postsLoading, postsHasMore, postsPage } = state;
	const [error, setError] = useState(null);
	const loadMoreRef = useRef(null);

	// Fetch posts data
	const fetchData = useCallback(async () => {
		try {
			dispatch({
				type: 'POSTS_LOADING',
				payload: true
			});

			const pageUrl = `${url}?page=${postsPage}&per_page=10`;
			const response = await axiosInstance.get(pageUrl);

			// Update the posts list with new data
			dispatch({
				type: 'POSTS_LIST',
				payload: [...postsList, ...response.data]
			});

			// Check if there are no more posts
			if (response.data.length < 10) {
				dispatch({
					type: 'POSTS_HAS_MORE',
					payload: false
				});
			} else {
				// Increment the page number
				dispatch({
					type: 'POSTS_PAGE',
					payload: postsPage + 1
				});
			}

		} catch (err) {
			setError(err);
		} finally {
			dispatch({
				type: 'POSTS_LOADING',
				payload: false
			});
		}
	}, [url, postsPage]);

	// Setup IntersectionObserver for infinite scrolling
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && postsHasMore && !postsLoading) {
					fetchData();
				}
			},
			{ rootMargin: '100px' }
		);

		if (loadMoreRef.current) {
			observer.observe(loadMoreRef.current);
		}

		return () => {
			if (loadMoreRef.current) {
				observer.unobserve(loadMoreRef.current);
			}
		};
	}, [postsHasMore, postsLoading, fetchData]);

	// Initial fetch
	useEffect(() => {
		if (url && postsList.length === 0) {
			fetchData();
		}
	}, [url]);

	return {
		postsList,
		postsLoading,
		postsHasMore,
		error,
		loadMoreRef,
	};
};

export default useFetchPosts;
