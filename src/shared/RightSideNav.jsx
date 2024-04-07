import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const RightSideNav = () => {
  return (
    <div className="space-y-5">
      {/* login  */}
      <div className="space-y-5">
        <h2 className="font-bold text-xl text-left">Login With</h2>
        <button className="btn px-14 ">
          <FcGoogle size={35} />
          Login with Google
        </button>
        <button className="btn px-14 ">
          <FaGithub size={35} />
          Login with Github
        </button>
      </div>

      {/* Find US on */}
      <div>
        <h2 className="font-bold text-xl text-left mb-2">Find Us On</h2>
        <div className="flex items-center gap-3  border py-5 pl-2">
          <FaFacebook size={20} />
          <a href="">Facebook</a>
        </div>
        <div className="flex items-center gap-3 border-r-[1px] border-l-[1px] py-5 pl-2">
          <FaTwitter size={20} />
          <a href="">Twitter</a>
        </div>
        <div className="flex items-center gap-3 border py-5 pl-2">
          <FaInstagram size={20} />
          <a href="">Instagram</a>
        </div>
      </div>

      {/* Q-zone */}
      <div className="p-3 bg-[#F3F3F3]">
        <h2 className="text-[20px] font-semibold text-[#403F3F]">Q-Zone</h2>
        <div>
          <img
            className="mx-auto"
            src="https://i.ibb.co/9WjXHH5/qZone1.png"
            alt="swimming"
          />
          <img
            className="mx-auto"
            src="https://i.ibb.co/X8Nqjyq/qZone2.png"
            alt="class"
          />
          <img
            className="mx-auto"
            src="https://i.ibb.co/n74tsLw/qZone3.png"
            alt="play-ground"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
