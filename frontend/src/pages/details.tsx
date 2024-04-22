import { useParams } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { BigCard } from "../components/ui/big-card";
import axios from "axios";
import { useEffect, useState } from "react";

const getIndividualNews = async (slug: string) => {
  try {
    const jwt = localStorage.getItem("jwt")?.toString();
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const likeArticle = async (slug: string) => {
  try {
    const jwt = localStorage.getItem("jwt")?.toString();
    const article_id = slug;
    const body = { article_id };
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/likes`,
      body,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const Details = () => {
  const { slug } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      if (!slug) return;
      const news = await getIndividualNews(slug);
      setNews(news.results);
    };
    fetchNews();
  }, [slug]);

  const hasItem = news && news.length > 0 && slug;

  return (
    <>
      <Topbar />
      <div className="container items-center justify-center w-full flex my-4">
        {hasItem &&
          news?.map((n) => (
            <BigCard
              key={n.article_id}
              {...n}
              onLike={() => {
                n.liked = !n.liked;
                likeArticle(slug);
              }}
            />
          ))}
      </div>
    </>
  );
};
