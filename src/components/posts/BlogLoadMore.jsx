const BlogLoadMore = ({loadMoreRef}) => {
	return (
		<div className="load-more  text-center mt-12">
			<button ref={loadMoreRef} className=" bg-blue-500 text-white py-2 px-4 rounded">Load More</button>
		</div>
	);
};
export default BlogLoadMore;