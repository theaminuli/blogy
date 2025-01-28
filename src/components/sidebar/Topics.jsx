const Topics = () => {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 mb-6">
			<h3 className="text-lg text-gray-900 font-bold mb-4">Topics</h3>
			<div className="flex flex-wrap gap-2">
				{["Database", "Accessibility", "Web Performance"].map(
					(topic, index) => (
						<span
							key={index}
							className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700"
						>
							{topic}
						</span>
					)
				)}
			</div>
		</div>
	);
};
export default Topics;