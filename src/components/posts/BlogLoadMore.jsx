/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const BlogLoadMore = ({ loadMoreRef, postsHasMore, postsLoading }) => {
	return (
		<div className="load-more  text-center mt-12 flex justify-center">
			{postsHasMore && (
				<button ref={loadMoreRef} className="loader"></button>
			)}
		</div>
	);
};
export default BlogLoadMore;
