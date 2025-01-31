/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";
import { truncateText } from "../../utils";
import BlogAuthor from "./BlogAuthor";
import BlogImage from "./BlogImage";

const BlogPostCard = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(`/categories/${post.categories[0]}`);
	return (
		<div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
			<div className="flex flex-col sm:flex-row">
				<BlogImage mediaID={post?.featured_media} />
				<div className="p-4 flex flex-col justify-between">
					<span className="text-xs uppercase w-fit font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded">
						{loading ? "Loading..." : data?.name}
					</span>
					<h2 className="text-lg text-gray-900 font-bold mt-2">
						<a
							href="#"
							className="hover:underline hover:underline-offset-2 hover:text-blue-500 transition duration-300"
						>
							{post.title?.rendered}
						</a>
					</h2>
					<div
						className="text-sm text-gray-600 mt-1"
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
