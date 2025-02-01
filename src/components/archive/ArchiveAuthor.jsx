/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";
import { formatDate } from "../../utils";

/**
 * ArchiveAuthor component displays the author's avatar and name along with the post's modified date.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The post object containing author and modified date information.
 * @param {string} props.post.author - The author ID of the post.
 * @param {string} props.post.modified - The modified date of the post.
 *
 * @returns {JSX.Element} The rendered ArchiveAuthor component.
 */
const ArchiveAuthor = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(`/users/${post.author}`);
	const placeholder = "https://placehold.co/32"; // Placeholder for loading state

	return (
		<div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-300">
			<img
				src={loading ? placeholder : data?.avatar_urls?.["48"] || placeholder}
				alt={data?.name}
				className="w-8 h-8 rounded-full mr-2"
			/>
			<div>
				<p className="font-medium text-gray-900 dark:text-gray-100">{data?.name}</p>
				<p>{formatDate(post?.modified)}</p>
			</div>
		</div>
	);
};

export default ArchiveAuthor;
