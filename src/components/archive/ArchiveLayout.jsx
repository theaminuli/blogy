/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import { useFetchAnyData } from "../../hooks";
import ArchiveHero from "./ArchiveHero";
import ArchivePostCard from "./ArchivePostCard";

/**
 * ArchiveLayout component fetches and displays posts based on the category ID from the URL parameters.
 * 
 * It uses the `useParams` hook to get the category ID and the `useFetchAnyData` hook to fetch posts data.
 * 
 * The component conditionally renders:
 * - A loading message while data is being fetched.
 * - A "No posts found" message if no posts are available.
 * - A grid of `ArchivePostCard` components if posts are available.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ArchiveLayout = () => {
	const { id } = useParams();
	const { data, loading, error } = useFetchAnyData(`/posts?categories=${id}`);
	const posts = data;

	return (
		<>
			<div className="archive-container mt-7">
				<ArchiveHero posts={posts} />
			</div>
			{loading ? (
				<div className="archive-container text-center mt-16">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
						Loading...
					</h2>
				</div>
			) : posts.length === 0 ? (
				<div className="archive-container text-center mt-16">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
						No posts found
					</h2>
				</div>
			) : (
				<div className="pb-16 pt-16">
					<div className="archive-container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{posts.map((post, index) => (
							<ArchivePostCard key={index} post={post} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default ArchiveLayout;
