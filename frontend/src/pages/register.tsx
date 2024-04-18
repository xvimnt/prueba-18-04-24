import { LoginRegisterCard } from "../components/layout/login-register-card";
import { Topbar } from "../components/topbar";

export const Register = () => {
  return (
    <>
      <Topbar />
      <div className="w-full h-full p-[64px] items-center justify-center flex">
        <LoginRegisterCard onSubmit={() => {}} />
      </div>
    </>
  );
};
