import { useEffect, useState } from "react";
import Loader from "./Loader";
import NewsCard from "./NewsCard";

const NewsContainer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("news.json");
      const data = await res.json();
      setNews(data);
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);
  return !news.length ? (
    <Loader />
  ) : (
    <div>
      <h2>Dragon News Home</h2>
      {news.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </div>
  );
};

export default NewsContainer;
