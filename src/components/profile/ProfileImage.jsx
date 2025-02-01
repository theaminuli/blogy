import heroImage from "../../assets/hero.png";

/**
 * ProfileImage component renders a profile image with multiple layers of styling.
 *
 * @component
 * @example
 * return (
 *   <ProfileImage />
 * )
 *
 * @returns {JSX.Element} A JSX element that displays a styled profile image.
 */
const ProfileImage = () => {
	return (
		<div className="relative w-96 h-96 max-sm:w-70 max-sm:h-70 flex items-center justify-center mt-3">
			{/* Background Layer 1 (Blue) */}
			<div className="absolute w-full h-full bg-blue-500 dark:bg-blue-700 rounded-full z-9"></div>
			{/* Background Layer 2 (Light Gray) */}
			<div className="absolute w-[100%] h-[100%] bg-[#E0E7F0] dark:bg-[#2d3748] rounded-full z-8 translate-x-2 translate-y-2"></div>
			{/* Profile Image */}
			<img
				src={heroImage}
				alt="Profile"
				className="w-[90%] h-[90%] rounded-b-full object-cover overflow-hidden z-10"
			/>
		</div>
	);
};

export default ProfileImage;
