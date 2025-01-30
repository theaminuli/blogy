const initialState = {
	postsList: [],
	postsPage : 1,
	postsHasMore: true,
	postsLoading: true,
};

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

