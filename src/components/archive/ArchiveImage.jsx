/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetchAnyData } from "../../hooks";

/**
 * ArchiveImage component fetches and displays an image based on the provided mediaID.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.mediaID - The ID of the media to fetch.
 * @returns {JSX.Element} The rendered component.
 */
const ArchiveImage = ({ mediaID }) => {
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
export default ArchiveImage;
