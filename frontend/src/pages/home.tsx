import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/topbar";
import { Card } from "../components/ui/card";

const news = [
  {
    title: "Noticia 1",
    description: "Descripcion 1",
    image: "https://via.placeholder.com/150",
    onView: () => {},
  },
  {
    title: "Noticia 2",
    description: "Descripcion 2",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Noticia 3",
    description: "Descripcion 3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Noticia 4",
    description: "Descripcion 4",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Noticia 5",
    description: "Descripcion 5",
    image: "https://via.placeholder.com/150",
  },
];

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <div className="w-full h-full p-[64px] flex flex-col gap-4">
        <span className="w-[352px] text-black text-2xl font-normal">
          Las ultimas del momento
        </span>
        <div className="flex flex-row gap-2">
          {news.map((n) => (
            <Card
              title={n.title}
              description={n.description}
              image={n.image}
              onView={() => navigate("/details")}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-full p-[64px] flex flex-col gap-4">
        <span className="w-[352px] text-black text-2xl font-normal">
          Te recomendamos
        </span>
        <div className="flex flex-row gap-2">
          {news.map((n) => (
            <Card title={n.title} description={n.description} image={n.image} />
          ))}
        </div>
      </div>
    </>
  );
};
