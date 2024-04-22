import { useParams } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { BigCard } from "../components/ui/big-card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/ui/card";

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
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      if (!slug) return;
      const news = await getIndividualNews(slug);
      setNews(news.results);
      setLiked(news.liked);
    };
    fetchNews();
  }, [slug]);

  const hasItem = news && news.length > 0 && slug;
  const post = news[0];

  return (
    <>
      <Topbar />
      <div className="container items-center justify-center w-full flex my-4">
        {hasItem && (
          <>
            <BigCard
              key={post.article_id}
              {...post}
              likedState={liked}
              onLike={() => {
                setLiked((prev) => !prev);
                likeArticle(slug);
              }}
            />
          </>
        )}
      </div>

      <div className="md:px-[64px] px-[12px] space-y-4">
        <h2 className="text-xl font-semibold ]">Recomendados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {post?.recommended.map((n) => (
            <Card
              key={n.article_id}
              title={n.title}
              description={n.description}
              image={n.image_url}
              onView={() => window.location.replace(`/details/${n.article_id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
