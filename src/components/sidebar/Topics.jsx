import { useFetchAnyData } from "../../hooks";

const Topics = () => {
	const { data, loading, error } = useFetchAnyData("/categories");

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="bg-white rounded-lg shadow-md p-4 mb-6">
			<h3 className="text-lg text-gray-900 font-bold mb-4">Topics</h3>
			<div className="flex flex-wrap gap-2">
				{data?.map((category) => (
					<span
						key={category.id}
						className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700"
					>
						{category.name}
					</span>
				))}
			</div>
		</div>
	);
};

export default Topics;
