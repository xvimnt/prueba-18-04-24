import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Card } from "../components/ui/card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Filters } from "../components/ui/filters";

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

export const Categories = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews();
      setNews(news);
      const categories = news.map((n) => n.category.toString().trim());
      // remove duplicates
      for (let i = 0; i < categories.length; i++) {
        for (let j = i + 1; j < categories.length; j++) {
          if (categories[i] === categories[j]) {
            categories.splice(j--, 1);
          }
        }
      }

      setCategories(Array.from(categories));
    };
    fetchNews();
  }, []);
  return (
    <>
      <Topbar />
      <div className="w-full h-full px-[12px] md:px-[64px] flex flex-row gap-16">
        <Filters
          categories={categories}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {news?.map((n) => {
            if (filter && n.category[0] !== filter) return null;
            return (
              <Card
                title={n.title}
                description={n.description}
                image={n.image_url}
                onView={() => navigate(`/details/${n.article_id}`)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
