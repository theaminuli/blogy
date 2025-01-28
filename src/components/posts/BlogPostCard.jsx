import BlogAuthor from "./BlogAuthor";
import BlogImage from "./BlogImage";

const BlogPostCard = () => {
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
							Building microservices with Dropwizard, MongoDB & Docker
						</a>
					</h2>
					<p className="text-sm text-gray-600 mt-1">
						This NoSQL database oriented to documents (by documents like JSON)
						combines some of the features from relational databases, easy to use
						and the multi-...
					</p>
					{/* Author and Date */}
					<BlogAuthor />
				</div>
			</div>
		</div>
	);
};
export default BlogPostCard;
