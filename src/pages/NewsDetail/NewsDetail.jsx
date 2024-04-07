import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";
import RightSideNav from "./../../shared/RightSideNav";

const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/news.json");
      const data = await res.json();
      const singleNews = data.find((a_news) => a_news._id === id);
      setNews(singleNews);
    };
    fetchData();
  }, [id]);

  const { title, details, image_url } = news;
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-12 mt-[30px] gap-6">
        <div className="col-span-9">
          <h2 className="text-[#403F3F] text-[20px] font-semibold mb-[20px]">
            Dragon News
          </h2>
          <div className="border-[1px] border-[#E7E7E7] rounded-lg p-[30px]">
            <img
              src={image_url}
              className="h-[411px] w-full rounded-md object-cover"
              alt="image"
            />
            <p className="mt-[20px] mb-[8px] text-[#403F3F] text-[25px] font-bold">
              {title}
            </p>
            <p className="text-[#706F6F] text-[16px] font-normal">{details}</p>
            <Link to={"/"}>
              <button className="btn bg-[#D72050] text-[#FFF] text-[20px] font-medium hover:bg-[#D72050] mt-[32px]">
                <FaArrowLeftLong size={25} fill="#FFFFFF" /> All news in this
                category
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
