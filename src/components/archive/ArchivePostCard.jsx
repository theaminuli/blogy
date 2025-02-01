/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useFetchAnyData } from "../../hooks";
import { truncateText } from "../../utils";
import ArchiveAuthor from "./ArchiveAuthor";
import ArchiveImage from "./ArchiveImage";

/**
 * ArchivePostCard component displays a card with post details.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The post object containing post details.
 * @param {Object} props.post.categories - Array of categories associated with the post.
 * @param {number} props.post.featured_media - ID of the featured media for the post.
 * @param {string} props.post.slug - The slug of the post.
 * @param {Object} props.post.title - The title object of the post.
 * @param {string} props.post.title.rendered - The rendered title of the post.
 * @param {Object} props.post.excerpt - The excerpt object of the post.
 * @param {string} props.post.excerpt.rendered - The rendered excerpt of the post.
 *
 * @returns {JSX.Element} The rendered ArchivePostCard component.
 */
const ArchivePostCard = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(
		`/categories/${post.categories[0]}`
	);

	return (
		<div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:text-white">
			<div className="flex flex-col">
				<ArchiveImage mediaID={post?.featured_media} />
				<div className="p-4 flex flex-col justify-between">
					<span className="text-xs uppercase w-fit font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">
						{loading ? "Loading..." : data?.name}
					</span>
					<h2 className="text-lg text-gray-900 font-bold mt-2 dark:text-gray-100">
						<Link
							to={`/${post.slug}`}
							className="hover:underline hover:underline-offset-2 hover:text-blue-500 dark:hover:text-blue-300 transition duration-300"
						>
							{post.title?.rendered}
						</Link>
					</h2>
					<div
						className="text-sm text-gray-600 mt-1 dark:text-gray-300"
						dangerouslySetInnerHTML={{
							__html: truncateText(post.excerpt?.rendered, 130),
						}}
					></div>
					<ArchiveAuthor post={post} />
				</div>
			</div>
		</div>
	);
};

export default ArchivePostCard;
