import ProfileImage from "./ProfileImage";



const PortfolioHero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-[100px] h-[calc(100vh-73px)] md:h-auto bg-white">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Text Section */}
				<div className="text-center md:text-left md:max-w-md">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
						Hi, I'm <span className="text-blue-600">Julia Walker.</span>
					</h1>
					<h2 className="text-2xl font-semibold text-gray-800 mt-2">
						Web Developer
					</h2>
					<p className="text-gray-600 mt-4">
						Specialized in <span className="font-medium">a11y</span> and Core
						Web Vitals
					</p>
					<div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
						<button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
							Contact Me
						</button>
						<button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:border-gray-400 hover:text-gray-700 transition">
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
