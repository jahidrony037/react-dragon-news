import moment from "moment";
import logo from "../assets/assets/logo.png";
const Header = () => {
  return (
    <div>
      <img src={logo} className="mx-auto" alt="logo picture" />
      <p className="text-lg text-[#706F6F] font-normal text-center mt-5 mb-[10px]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center text-[20px] text-[#706F6F]">
        <span className="text-[#403F3F]">{moment().format("dddd,")}</span>
        {moment().format(" MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
