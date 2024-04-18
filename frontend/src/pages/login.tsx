import { LoginRegisterCard } from "../components/layout/login-register-card";
import { Topbar } from "../components/topbar";

export const Login = () => {
  return (
    <>
      <Topbar />
      <div className="w-full h-full p-[64px] items-center justify-center flex">
        <LoginRegisterCard isLogin={true} onSubmit={() => {}} />
      </div>
    </>
  );
};
