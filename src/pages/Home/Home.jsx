import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard";
import Header from "../../shared/Header";
import LeftSideNav from "../../shared/LeftSideNav";
import Navbar from "../../shared/Navbar";
import RightSideNav from "../../shared/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  // let news = useLoaderData();
  const [news, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/news.json");
      const data = await res.json();
      const filteredNews = data.filter((a_news) => a_news.category_id === id);
      setNews(filteredNews);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="md:col-span-3 border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-6 space-y-7">
          Dragon News
          {news.map((a_news) => (
            <NewsCard key={a_news._id} news={a_news} />
          ))}
        </div>
        <div className="md:col-span-3">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
