/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * BlogLoadMore component renders a "Load More" button if there are more posts to load.
 *
 * @param {Object} props - The component props.
 * @param {React.RefObject} props.loadMoreRef - A ref object to attach to the "Load More" button.
 * @param {boolean} props.postsHasMore - A flag indicating if there are more posts to load.
 * @param {boolean} props.postsLoading - A flag indicating if posts are currently being loaded.
 * @returns {JSX.Element} The rendered component.
 */
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
