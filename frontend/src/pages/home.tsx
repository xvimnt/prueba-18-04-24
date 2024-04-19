import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Card } from "../components/ui/card";
import axios from "axios";
import { useState, useEffect } from "react";

const getNews = async () => {
  try {
    const jwt = localStorage.getItem("jwt");
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(response.data);
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
      <div className="w-full h-full p-[64px] flex flex-col gap-4">
        <span className="w-[352px] text-black text-2xl font-normal">
          Las ultimas del momento
        </span>
        <div className="grid grid-cols-5 gap-2">
          {news?.map((n) => (
            <Card
              title={n.title}
              description={n.description}
              image={n.image_url}
              onView={() => navigate(`details/${n.article_id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
