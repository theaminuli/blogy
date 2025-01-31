import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import MobileNav from "./MobileNav";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="flex items-center justify-between p-4 bg-white border-b border-gray-300 sticky z-20">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center">
					{/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
					<span className="text-2xl font-bold ml-2 text-black">Blogy</span>
				</div>
				<div className="hidden md:flex space-x-4">
					<a href="#home" className="text-gray-800 hover:text-blue-500">
						Home
					</a>
					<a href="#about" className="text-gray-800 hover:text-blue-500">
						About
					</a>
					<a href="#blog" className="text-gray-800 hover:text-blue-500">
						Blog
					</a>
				</div>

				<div className="flex items-center">
					<button
						className="p-2 text-gray-800 text-[25px] border-r border-gray-300 cursor-pointer"
						onClick={() => {
							/* toggle dark mode */
						}}
					>
						<MdOutlineDarkMode />
					</button>
					<button
						className="p-2 text-gray-800 text-[25px] cursor-pointer"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<HiMenuAlt1 />
					</button>
				</div>
				<MobileNav isOpen={isOpen} toggleNav={() => setIsOpen(!isOpen)} />
			</div>
		</header>
	);
}
