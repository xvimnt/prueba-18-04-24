import { LoginRegisterCard } from "../components/layout/login-register-card";
import { Topbar } from "../components/topbar";
import axios from "axios";
import { toast } from "react-hot-toast";

// function to create a new user
interface User {
  email: string;
  password: string;
  name: string;
}

const createUser = async (data: User) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const Register = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
      name: { value: string };
    };
    const email = target.email.value; // typechecks!
    if (!email.includes("@")) {
      toast.error("Correo inválido");
      return;
    }
    const password = target.password.value; // typechecks!
    if (password.length < 8) {
      toast.error("Contraseña debe tener al menos 8 caracteres");
      return;
    }
    const name = target.name.value; // typechecks!
    if (name.length < 3) {
      toast.error("Nombre debe tener al menos 3 caracteres");
      return;
    }
    const confirmPassword = target.confirmPassword.value; // typechecks!
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    const data = { email, password, name };
    const response = await createUser(data);
    if (response) {
      toast.success("Usuario creado correctamente");
    } else {
      toast.error("Error al crear usuario");
    }
  };

  return (
    <>
      <Topbar />
      <div className="w-full h-full p-[64px] items-center justify-center flex">
        <LoginRegisterCard onSubmit={handleSubmit} />
      </div>
    </>
  );
};
