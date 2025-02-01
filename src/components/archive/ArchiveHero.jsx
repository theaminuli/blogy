/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/**
 * ArchiveHero component displays a hero section for the archive page.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.posts - The list of posts to be displayed in the archive.
 * @returns {JSX.Element} The rendered ArchiveHero component.
 */
const ArchiveHero = ({ posts }) => {
	return (
		<div className="relative w-full h-60 md:h-60 mb-8">
			<div className="absolute inset-0 bg-black opacity-80 dark:bg-gray-800 dark:opacity-90 flex items-center justify-center text-center">
				<h2 className="text-white text-2xl md:text-4xl font-bold m-2 dark:text-gray-100">
					Archive : Categories
				</h2>
			</div>
		</div>
	);
};

export default ArchiveHero;
