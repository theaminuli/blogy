import heroImage from "../assets/hero.png";

const ProfileImage = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center mt-3">
      <div className="absolute w-full h-full bg-blue-500 rounded-full z-20"></div>
      <div className="absolute w-[105%] h-[105%] bg-[#E0E7F0] rounded-full z-10 translate-x-2 translate-y-2"></div>
      <img
        src={heroImage}
        alt="Profile"
        className="w-[90%] h-[90%] rounded-b-full object-cover overflow-hidden z-30"
      />
    </div>
  );
};

export default ProfileImage;
