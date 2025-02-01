/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";
import { formatDate } from "../../utils";

/**
 * ArticleHeader component displays the header of an article.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The post object containing article details.
 * @param {Object} props.post.author - The author of the post.
 * @param {Object} props.post.title - The title of the post.
 * @param {Object} props.post.modified - The modification date of the post.
 * @returns {JSX.Element} The rendered component.
 */
const ArticleHeader = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(`/users/${post?.author}`);

	return (
		<header className="text-center py-6">
			<h1 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
				{post?.title?.rendered}
			</h1>
			<p className="text-gray-600 mt-2 dark:text-gray-300">
				By
				<a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
					{loading ? "Loading..." : ` ${data?.name} `}
				</a>
				| {formatDate(post?.modified)}
			</p>
		</header>
	);
};

export default ArticleHeader;
