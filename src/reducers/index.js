const initialState = {
	postsList: [],
	postsPage: 1,
	postsHasMore: true,
	postsLoading: true,
};

/**
 * Root reducer function to handle different action types and update the state accordingly.
 *
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action dispatched to the reducer.
 * @param {string} action.type - The type of action being handled.
 * @param {any} action.payload - The payload of the action.
 * @returns {Object} The new state of the application after applying the action.
 */
const rootReducer = (state, action) => {
	switch (action.type) {
		case 'POSTS_LIST':
			return {
				...state,
				postsList: action.payload,
			};

		case 'POSTS_PAGE':
			return {
				...state,
				postsPage: action.payload,
			};
		case 'POSTS_HAS_MORE':
			return {
				...state,
				postsHasMore: action.payload,
			};
		case 'POSTS_LOADING':
			return {
				...state,
				postsLoading: action.payload,
			};
		default:
			return state;
	}
};

export { initialState, rootReducer };

