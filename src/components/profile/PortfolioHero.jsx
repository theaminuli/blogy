/* eslint-disable react/no-unescaped-entities */
import ProfileImage from "./ProfileImage";

/*
 * PortfolioHero component renders a hero section for a portfolio page.
 * It includes a greeting, a brief introduction, and two buttons for contact and about information.
 * The layout is responsive, adjusting for different screen sizes.
 *
 * @component
 * @example
 * return (
 *   <PortfolioHero />
 * )
 */
const PortfolioHero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-[100px] h-[calc(100vh-73px)] md:h-auto bg-white dark:bg-gray-900">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Text Section */}
				<div className="text-center md:text-left md:max-w-md">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
						Hi, I'm <span className="text-blue-600 dark:text-blue-400">Julia Walker.</span>
					</h1>
					<h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
						Best Blogger in the World
					</h2>
					<p className="text-gray-600 dark:text-gray-400 mt-4">
						Specialized in <span className="font-medium">a11y</span> and Core
						Web Vitals
					</p>
					<div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
						<button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600">
							Contact Me
						</button>
						<button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:border-gray-400 hover:text-gray-700 transition cursor-pointer dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-white">
							About Me
						</button>
					</div>
				</div>

				{/* Image Section */}
				<ProfileImage />
			</div>
		</div>
	);
};

export default PortfolioHero;
