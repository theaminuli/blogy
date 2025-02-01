import Copyright from "./Copyright";

/**
 * Footer component that displays the footer section of the website.
 * It includes three columns: Blogy information, Quick Links, and Legal Stuff.
 * Each column contains relevant links and information.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer = () => {
	return (
		<footer className="pt-20 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
			<div className="container mx-auto py-4 text-center grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="text-center">
					<h3 className="font-bold text-[30px] mb-2 text-gray-900 dark:text-white">
						Blogy
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
						dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className="text-center">
					<h3 className="font-bold text-[30px] mb-2 text-gray-900 dark:text-white">
						Quick Links
					</h3>
					<a
						href="#home"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						Home
					</a>
					<a
						href="#about"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						About
					</a>
					<a
						href="#contact"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						Contact
					</a>
				</div>
				<div className="text-center">
					<h3 className="font-bold text-[30px] mb-2 text-gray-900 dark:text-white">
						Legal Stuff
					</h3>
					<a
						href="#privacy"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						Privacy Policy
					</a>
					<a
						href="#terms"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						Terms & Conditions
					</a>
					<a
						href="#cookies"
						className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
					>
						Cookies Policy
					</a>
				</div>
			</div>
			<Copyright />
		</footer>
	);
};

export default Footer;
