/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

export default function MobileNav({ isOpen, toggleNav }) {
	return (
		<div
			className={`fixed top-0 right-0 z-[100] bg-[#010204] bg-opacity-90 transition-all duration-300 w-[320px] h-[100vh] ${
				isOpen
					? "opacity-1 transform translate-x-0"
					: "opacity-0 transform translate-x-[320px]"
			}`}
		>
			<div className="absolute top-0 left-0 p-4">
				<button onClick={toggleNav} className="text-white text-[25px]">
					<IoMdClose/>
				</button>
			</div>
			<div className="flex flex-col items-center justify-center h-full">
				<a href="#main" className="text-white text-lg py-2">
					Main
				</a>
				<a href="#topics" className="text-white text-lg py-2">
					Topics
				</a>
				<a href="#about" className="text-white text-lg py-2">
					About
				</a>
			</div>
		</div>
	);
}
