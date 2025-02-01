/* eslint-disable no-unused-vars */
import { useFetchPosts } from "../../hooks";
import { Newsletter, Tags, Topics } from "../sidebar";
import BlogLoadMore from "./BlogLoadMore";
import BlogPostCard from "./BlogPostCard";

/**
 * BlogLayout component that displays a list of blog posts and additional sections like topics, tags, and newsletter.
 *
 * This component uses the `useFetchPosts` hook to fetch the list of blog posts and handles loading state and pagination.
 *
 * @component
 * @returns {JSX.Element} The rendered BlogLayout component.
 */
const BlogLayout = () => {
	const { postsList, postsLoading, postsHasMore, error, loadMoreRef } =
		useFetchPosts("/posts");

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
			<div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="md:col-span-2">
					<h2 className="text-2xl text-gray-900 dark:text-white font-bold mb-6">
						Latest Blog Post
					</h2>
					<div className="grid gap-6">
						{postsList.map((post, index) => (
							<BlogPostCard key={index} post={post} />
						))}
					</div>
					<BlogLoadMore
						loadMoreRef={loadMoreRef}
						postsHasMore={postsHasMore}
						postsLoading={postsLoading}
					/>
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
