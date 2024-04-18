import { Topbar } from "../components/topbar";
import { BigCard } from "../components/ui/big-card";

export const Details = () => {
  return (
    <>
      <Topbar />
      <div className="container items-center justify-center w-full flex mt-12">
        <BigCard
          title="Noticia 1"
          description="Descripcion 1"
          image="https://via.placeholder.com/150"
          likes={50}
        />
      </div>
    </>
  );
};
