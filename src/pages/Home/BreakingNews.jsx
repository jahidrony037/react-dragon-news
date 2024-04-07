import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="mt-[30px]">
      <div className="relative bg-[#F3F3F3] p-4 flex items-center">
        <button className="btn btn-secondary text-[20px] font-medium text-[#FFF]">
          Latest
        </button>
        <Marquee
          speed={100}
          pauseOnHover={true}
          className="text-[#403F3F] text-lg"
        >
          <Link to="" className="mr-4">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to="" className="mr-4">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link to="" className="mr-4">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
