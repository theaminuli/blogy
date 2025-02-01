/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { useFetchAnyData } from "../../hooks";
/**
 * Topics component fetches and displays a list of categories.
 *
 * This component uses the `useFetchAnyData` hook to fetch data from the "/categories" endpoint.
 * It displays a loading state, an error message if the fetch fails, and a list of category links if the fetch is successful.
 *
 * @component
 * @example
 * return (
 *   <Topics />
 * )
 *
 * @returns {JSX.Element} A React component that displays a list of categories.
 */
const Topics = () => {
	const { data, loading, error } = useFetchAnyData("/categories");

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
			<h3 className="text-lg text-gray-900 dark:text-white font-bold mb-4">
				Topics
			</h3>
			<div className="flex flex-wrap gap-2">
				{data?.map((category) => (
					<Link
						key={category.id}
						to={`/categories/${category.id}`}
						className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300"
					>
						{category.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Topics;
