/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";
import { formatDate } from "../../utils";

const BlogAuthor = ({ post }) => {
	const {data, loading, error} = useFetchAnyData(`/users/${post.author}`);
	const placeholder = "https://placehold.co/32"
	
	return (
		<div className="flex items-center mt-4 text-sm text-gray-500">
			<img
				src={loading ? placeholder : data?.avatar_urls?.["48"] || placeholder}
				alt={data?.name}
				className="w-8 h-8 rounded-full mr-2"
			/>
			<div>
				<p>{data?.name }</p>
				<p>{formatDate(post?.modified) }</p>
			</div>
		</div>
	);
};
export	default	BlogAuthor;