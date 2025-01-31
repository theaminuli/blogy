/* eslint-disable no-unused-vars */
import { useFetchPosts } from "../../hooks";
import { Newsletter, Tags, Topics } from "../sidebar";
import BlogLoadMore from "./BlogLoadMore";
import BlogPostCard from "./BlogPostCard";

const BlogLayout = () => {
	const { postsList, postsLoading, postsHasMore, error, loadMoreRef } = useFetchPosts("/posts");
	
	return (
		<div className="min-h-screen bg-gray-100 py-20">
			<div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					<h2 className="text-2xl text-gray-900 font-bold mb-6">
						Latest Blog Post
					</h2>
					<div className="grid gap-6">
						{postsList.map((post, index) => (
							<BlogPostCard key={index} post={post} />
						))}
					</div>
					<BlogLoadMore loadMoreRef={loadMoreRef} postsHasMore={postsHasMore} postsLoading={ postsLoading} />
				</div>

				<div className="md:col-span-1">
					<Topics />
					<Tags />
					<Newsletter />
				</div>
			</div>
		</div>
	);
};
export default BlogLayout;
