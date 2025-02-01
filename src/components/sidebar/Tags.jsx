/**
 * A functional React component that renders a list of tags.
 *
 * @component
 * @example
 * return (
 *   <Tags />
 * )
 *
 * @returns {JSX.Element} A div containing a list of tags.
 */
const Tags = () => {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
			<h3 className="text-lg text-gray-900 dark:text-white font-bold mb-4">
				Tags
			</h3>
			<div className="flex flex-wrap gap-2">
				{["#mongodb", "#nodejs", "#webperf", "#accessibility"].map(
					(tag, index) => (
						<span
							key={index}
							className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300"
						>
							{tag}
						</span>
					)
				)}
			</div>
		</div>
	);
};
export default Tags;
