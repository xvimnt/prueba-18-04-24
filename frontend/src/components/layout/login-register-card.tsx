interface PropsI {
  isLogin?: boolean;
  onSubmit?: () => void;
}

export const LoginRegisterCard = ({ isLogin, onSubmit }: PropsI) => {
  return (
    <div>
      <div className="w-fit h-fit bg-lime-300 rounded-2xl p-8">
        <form
          className="flex flex-col gap-4 items-center justify-center min-w-80"
          onSubmit={onSubmit}
        >
          {/* user input */}
          <div className="w-full px-4 h-[72px] flex-col justify-start items-start gap-3 inline-flex">
            <h2 className="text-black text-base font-normal ">Usuario</h2>
            <input className="w-full h-[41px] bg-white rounded-2xl p-2" />
          </div>
          {/* password input */}
          <div className="w-full px-4 h-[72px] flex-col justify-start items-start gap-3 inline-flex">
            <h2 className="text-black text-base font-normal ">Contraseña</h2>
            <input
              className="w-full h-[41px] bg-white rounded-2xl p-2"
              type="password"
            />
          </div>
          {/* confirm password input */}
          {!isLogin && (
            <div className="w-full px-4 h-[72px] flex-col justify-start items-start gap-3 inline-flex">
              <h2 className="text-black text-base font-normal ">
                Confirmar Contraseña
              </h2>
              <input
                className="w-full h-[41px] bg-white rounded-2xl p-2"
                type="password"
              />
            </div>
          )}
          {/* buttons */}
          <div className="mt-10 flex flex-col">
            {isLogin ? (
              <button className="w-[116px] h-[29px] px-2 py-0.5 bg-lime-500 hover:bg-lime-600 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
                <span className="text-lime-50 text-base font-normal">
                  Entrar
                </span>
              </button>
            ) : (
              <button className="w-[116px] h-[29px] px-2 py-0.5 bg-lime-500 hover:bg-lime-600 rounded-[32px] justify-center items-center gap-2.5 inline-flex">
                <span className="text-lime-50 text-base font-normal">
                  Registrarse
                </span>
              </button>
            )}
            {isLogin && (
              <a
                href="/register"
                className="text-blue-400 mt-4 hover:underline hover:text-blue-500 cursor-pointer"
              >
                No tienes cuenta?
              </a>
            )}
            {!isLogin && (
              <a
                href="/"
                className="text-blue-400 mt-4 hover:underline hover:text-blue-500 cursor-pointer"
              >
                Ya tienes cuenta?
              </a>
            )}
          </div>
        </form>
      </div>
      <div className="w-[352px] text-black text-base font-normal mt-4">
        Ingresa para no perderte lo mas importante del momento!
      </div>
    </div>
  );
};
