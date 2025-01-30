/* eslint-disable react/prop-types */
import { truncateText } from "../../utils";
import BlogAuthor from "./BlogAuthor";
import BlogImage from "./BlogImage";

const BlogPostCard = ({ post }) => {
	console.log(post);
	
	return (
		<div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden">
			<div className="flex flex-col sm:flex-row">
				{/* Image */}
				<BlogImage />
				{/* Content */}
				<div className="p-4 flex flex-col justify-between">
					<span className="text-xs uppercase w-fit font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded">
						Database
					</span>
					<h2 className="text-lg text-gray-900 font-bold mt-2">
						<a
							href="#"
							className="hover:underline hover:underline-offset-2 hover:text-blue-500 transition duration-300"
						>
							{post.title?.rendered}
						</a>
					</h2>
					<div className="text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt?.rendered, 130) }}></div>
					{/* Author and Date */}
					<BlogAuthor />
				</div>
			</div>
		</div>
	);
};
export default BlogPostCard;
