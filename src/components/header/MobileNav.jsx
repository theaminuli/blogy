/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

/**
 * MobileNav component renders a mobile navigation menu.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines if the navigation menu is open.
 * @param {Function} props.toggleNav - Function to toggle the navigation menu.
 * @returns {JSX.Element} The rendered mobile navigation menu.
 */
export default function MobileNav({ isOpen, toggleNav }) {
	return (
		<div
			className={`fixed top-0 right-0 z-[999] w-[320px] h-screen 
            bg-gray-900 dark:bg-gray-800 text-white shadow-lg transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="absolute top-4 left-4">
				<button
					onClick={toggleNav}
					aria-label="Close menu"
					className="text-white text-2xl hover:text-gray-300 dark:hover:text-gray-400 transition"
				>
					<IoMdClose />
				</button>
			</div>
			<div className="flex flex-col items-center justify-center h-full space-y-4">
				<a
					href="#main"
					className="text-lg hover:text-yellow-400 dark:hover:text-yellow-500 transition"
				>
					Main
				</a>
				<a
					href="#topics"
					className="text-lg hover:text-yellow-400 dark:hover:text-yellow-500 transition"
				>
					Topics
				</a>
				<a
					href="#about"
					className="text-lg hover:text-yellow-400 dark:hover:text-yellow-500 transition"
				>
					About
				</a>
			</div>
		</div>
	);
}
