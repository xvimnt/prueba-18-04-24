import { LoginRegisterCard } from "../components/layout/login-register-card";
import { Topbar } from "../components/topbar";
import axios from "axios";
import toast from "react-hot-toast";

// function to login
interface User {
  email: string;
  password: string;
}

const login = async (data: User) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth`,
      data
    );
    toast.success("Inicio de sesión correcto");
    return response.data;
  } catch (error) {
    toast.error("Error al iniciar sesión");
    console.error(error);
  }
};

export const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    const data = { email, password };
    const jwt = await login(data);
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      window.location.href = "/home";
    }
  };
  return (
    <>
      <Topbar />
      <div className="w-full h-full p-[64px] items-center justify-center flex">
        <LoginRegisterCard isLogin={true} onSubmit={handleSubmit} />
      </div>
    </>
  );
};
