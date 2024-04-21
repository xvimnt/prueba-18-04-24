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
  return (
    <>
      <Topbar />
      <div className="container items-center justify-center w-full flex mt-12">
        {news && news?.map((n) => <BigCard {...n} />)}
      </div>
    </>
  );
};
