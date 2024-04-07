import PropTypes from "prop-types";
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark, FaStar } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view, _id } = news;
  //   const date = author[published_date].split(" ");
  //console.log(date);

  return (
    <div className="rounded-md border-[1px] border-[#E7E7E7] pb-5">
      <div className="bg-[#F3F3F3] p-5 flex items-center justify-between mb-[14px]">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author.img}
            alt="author_image"
          />
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegBookmark size={30} />
          <CiShare2 size={30} />
        </div>
      </div>
      <h2 className="text-[#403F3F] text-left text-[20px] font-bold px-5">
        {title}
      </h2>
      <div className="w-full mx-auto space-y-4 px-5">
        <img
          src={image_url}
          className="w-full h-[262px] object-contain"
          alt="image "
        />
        {details.length > 300 ? (
          <p className="text-justify">
            {details.slice(0, 300)}{" "}
            <Link
              to={`/news/${_id}`}
              className="text-[#FF8C47] text-[16px] font-normal"
            >
              {" "}
              Read More....
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="border-[1px]  border-[#E7E7E7] my-[20px] "></div>
        <div className="flex justify-between items-center mb-[20px]">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <FaStar size={30} fill="#FF8C47" />
              <FaStar size={30} fill="#FF8C47" />
              <FaStar size={30} fill="#FF8C47" />
              <FaStar size={30} fill="#FF8C47" />
            </div>
            <p>{rating.number}</p>
          </div>
          <div className="flex items-center gap-3">
            <LuEye size={30} />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
