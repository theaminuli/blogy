/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetchAnyData } from "../../hooks";

/**
 * HeroSection component displays a hero image for a blog post.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.post - The blog post data.
 * @param {string} props.post.featured_media - The media ID for the featured image.
 * @param {string} [props.post.alt_text] - The alternative text for the image.
 *
 * @returns {JSX.Element} The HeroSection component.
 */
const HeroSection = ({ post }) => {
	const { data, loading, error } = useFetchAnyData(`/media/${post?.featured_media}`);

	return (
		<div className="relative w-full h-100 md:h-100">
			<img
				className="w-full h-full object-cover"
				src={data?.source_url || "https://placehold.co/1200x400/png"}
				srcSet={`
					${data?.source_url}?w=480 480w,
					${data?.source_url}?w=768 768w,
					${data?.source_url}?w=1024 1024w
				`}
				sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1024px"
				alt={post?.alt_text || "Hero Image"}
			/>
			{/* Overlay for text */}
			{/* You can uncomment this overlay to display a title or description on top of the image */}
			{/* <div className="absolute inset-0 bg-black opacity-40 flex items-center justify-center text-center">
				<h2 className="text-white text-2xl md:text-4xl font-bold">
					Mastering Responsive Design with CSS min(), max(), and clamp()
				</h2>
			</div> */}
		</div>
	);
};

export default HeroSection;
