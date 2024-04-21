import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Card } from "../components/ui/card";
import axios from "axios";
import { useState, useEffect } from "react";

const getNews = async () => {
  try {
    const jwt = localStorage.getItem("jwt")?.toString();
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const Home = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews();
      setNews(news);
    };
    fetchNews();
  }, []);
  return (
    <>
      <Topbar />
      <div className="w-full h-full px-[12px] md:px-[64px] flex flex-col gap-4 items-center">
        <span className="text-black text-2xl font-normal">
          Las ultimas del momento
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {news?.map((n) => (
            <Card
              title={n.title}
              description={n.description}
              image={n.image_url}
              onView={() => navigate(`/details/${n.article_id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
