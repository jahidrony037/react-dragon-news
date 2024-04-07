import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const LeftSideNav = () => {
  const [catagories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();
      setCategories(data);
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      <h2 className="text-[#403F3F] text-[20px] font-semibold">All Category</h2>
      <div className="bg-[#E7E7E7] border-[#E7E7E7] border flex justify-center py-4 mt-[20px]">
        <h2 className="text-[#403F3F] text-[20px] font-semibold">
          National News
        </h2>
      </div>
      {!catagories.length ? (
        <Loader />
      ) : (
        <div className="mt-[30px]">
          <ul className="lg:pl-[20%]">
            {catagories.map((category) => (
              <li key={category.id} className="mt-[30px]">
                <Link
                  className="text-[#9F9F9F] text-[20px] font-medium"
                  to={`/category/${category.id}`}
                  // onClick={() => handleCategoryNews(category.id)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

LeftSideNav.propTypes = {
  handleCategoryNews: PropTypes.func.isRequired,
};

export default LeftSideNav;
