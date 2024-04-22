import { Logo } from "./icons";

export const Topbar = () => {
  return (
    <div className="w-full h-[111px]">
      <div className="w-full h-[78px]  bg-[#ABFFE5] justify-between items-center inline-flex md:px-[64px] px-[12px]">
        <div className="gap-4 flex items-center justify-center">
          <a href="/home">
            <Logo className="md:w-[78px] w-10 h-[78px]" />
          </a>
          <div className="text-[#6C48FF] md:text-2xl font-normal ">
            Conociendo mas!
          </div>
        </div>
        <div className="justify-start items-start gap-12 md:flex hidden">
          <a
            href="/home"
            className="text-neutral-900 text-xl font-normal cursor-pointer hover:underline hover:text-neutral-950"
          >
            Inicio
          </a>
          <a
            href="/categories"
            className="text-neutral-900 text-xl font-normal cursor-pointer hover:underline hover:text-neutral-950"
          >
            Categoria
          </a>
          <a
            href="/"
            className="text-neutral-900 text-xl font-normal cursor-pointer hover:underline hover:text-neutral-950"
          >
            Salir
          </a>
        </div>
      </div>
    </div>
  );
};
