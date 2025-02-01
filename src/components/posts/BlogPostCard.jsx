/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useFetchAnyData } from "../../hooks";
import { truncateText } from "../../utils";
import BlogAuthor from "./BlogAuthor";
import BlogImage from "./BlogImage";

/**
 * BlogPostCard component renders a card for a blog post with dark mode support.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The blog post data.
 * @param {Object} props.post.categories - The categories of the blog post.
 * @param {string} props.post.slug - The slug of the blog post.
 * @param {Object} props.post.title - The title of the blog post.
 * @param {string} props.post.title.rendered - The rendered title of the blog post.
 * @param {Object} props.post.excerpt - The excerpt of the blog post.
 * @param {string} props.post.excerpt.rendered - The rendered excerpt of the blog post.
 * @param {number} props.post.featured_media - The ID of the featured media for the blog post.
 *
 * @returns {JSX.Element} The rendered BlogPostCard component.
 */
const BlogPostCard = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(
		`/categories/${post.categories[0]}`
	);

	return (
		<div className="mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
			<div className="flex flex-col sm:flex-row">
				<BlogImage mediaID={post?.featured_media} />
				<div className="p-4 flex flex-col justify-between">
					<span className="text-xs uppercase w-fit font-semibold text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-900 px-2 py-1 rounded">
						{loading ? "Loading..." : data?.name}
					</span>
					<h2 className="text-lg text-gray-900 dark:text-white font-bold mt-2">
						<Link
							to={`/${post.slug}`}
							className="hover:underline hover:underline-offset-2 hover:text-blue-500 transition duration-300 dark:hover:text-blue-400"
						>
							{post.title?.rendered}
						</Link>
					</h2>
					<div
						className="text-sm text-gray-600 dark:text-gray-300 mt-1"
						dangerouslySetInnerHTML={{
							__html: truncateText(post.excerpt?.rendered, 130),
						}}
					></div>
					<BlogAuthor post={post} />
				</div>
			</div>
		</div>
	);
};
export default BlogPostCard;
