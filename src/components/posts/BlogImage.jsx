/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";

const BlogImage = ({ mediaID }) => {
	const { data, loading, error } = useFetchAnyData(`/media/${mediaID}`);
	if (loading)
		return (
			<img
				src="https://placehold.co/300x250/png"
				alt="MongoDB"
				className="object-cover lg:w-[350px] xl:w-[350px] md:w-[200px]"
			/>
		);
	return (
		<div className="relative w-full">
			<img
			src={data?.source_url || "https://placehold.co/300x250/png"}
			alt="MongoDB"
			className="object-cover h-[280px] lg:w-[350px] xl:w-[350px] max-md:w-full"
			/>
		</div>
	);
};
export default BlogImage;
