import { Logo } from "./icons";

export const Topbar = () => {
  return (
    <div className="w-full h-[111px] relative">
      <div className="w-full h-[111px] left-0 top-0 absolute bg-lime-300" />
      <div className="w-full h-[78px] left-0 top-[16px] absolute justify-center items-center gap-[332px] inline-flex">
        <a href="/home">
          <Logo className="w-[78px] h-[78px] relative" />
        </a>
        <div className="text-red-600 text-2xl font-normal ">
          Conociendo mas!
        </div>
        <div className="justify-start items-start gap-12 flex">
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
