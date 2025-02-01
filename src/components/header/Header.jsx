import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSunFoggyFill } from "react-icons/ri";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context";
import MobileNav from "./MobileNav";

/**
 * Header component that renders the top navigation bar.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { darkMode, setDarkMode } = useContext(ThemeContext);
	return (
		<header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 sticky top-0 left-0 z-20">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					<span className="text-2xl font-bold ml-2 text-black dark:text-white">
						<NavLink to="/"> Blogy</NavLink>
					</span>
				</div>
				<div className="hidden md:flex space-x-4">
					<a
						href="#home"
						className="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
					>
						Home
					</a>
					<a
						href="#about"
						className="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
					>
						About
					</a>
					<a
						href="#blog"
						className="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
					>
						Blog
					</a>
				</div>

				<div className="flex items-center">
					<button
						className="p-2 text-gray-800 text-[25px] border-r border-gray-300 cursor-pointer dark:text-white dark:border-gray-700"
						onClick={() => setDarkMode((prev) => !prev)}
					>
						{darkMode ? <RiSunFoggyFill /> : <MdOutlineDarkMode />}
					</button>
					<button
						className="p-2 text-gray-800 text-[25px] cursor-pointer dark:text-white"
						onClick={() => setIsOpen(!isOpen)}
					>
						<HiMenuAlt1 />
					</button>
				</div>
				<MobileNav isOpen={isOpen} toggleNav={() => setIsOpen(!isOpen)} />
			</div>
		</header>
	);
}
