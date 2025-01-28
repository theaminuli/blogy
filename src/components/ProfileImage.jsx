import heroImage from "../assets/hero.png";

const ProfileImage = () => {
  return (
    <div className="relative w-96 h-96 max-sm:w-70 max-sm:h-70 flex items-center justify-center mt-3">
      <div className="absolute w-full h-full bg-blue-500 rounded-full z-9"></div>
      <div className="absolute w-[100%] h-[100%] bg-[#E0E7F0] rounded-full z-8 translate-x-2 translate-y-2"></div>
      <img
        src={heroImage}
        alt="Profile"
        className="w-[90%] h-[90%] rounded-b-full object-cover overflow-hidden z-10"
      />
    </div>
  );
};

export default ProfileImage;
