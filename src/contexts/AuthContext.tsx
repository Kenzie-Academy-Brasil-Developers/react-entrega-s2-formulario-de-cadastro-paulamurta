import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export interface IFormLogIn {
  email: string;
  password: string;
}

export interface IFormSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  works: string[] | null;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

interface ITechs {
  id?: string;
  title: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  techs: ITechs[];
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logIn: (data: IFormLogIn) => void;
  signUp: (data: IFormSignUp) => void;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<ITechs[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        try {
          api.defaults.headers.common["authorization"] = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          // OU...
          // const { data } = await api.get("/profile", {
          //   headers: {
          //     Authorization: token as string,
          //   },
          // });

          // OU TBM.. const response = await.api.get("/profile")
          // e entao eu setaria os estados abaixo com response.data.user ou response.data.techs
          setUser(data);
          setTechs(data.techs);
          navigate("/", { replace: true });
        } catch (error) {
          console.log(error);
        }
      } else {
        localStorage.clear();
        setLoading(false);
      }
    }
    autoLogin();
  }, [navigate, token]);

  function signUp(data: IFormSignUp) {
    api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        console.log(res.data);
        navigate("/login", { replace: true });
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
      });
  }

  function logIn(data: IFormLogIn) {
    setLoading(true);
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res.data.user);
        setTechs(res.data.user.techs);
        toast.success(`Bem vindo(a), ${res.data.user.name}!`);
        console.log(res.data);
        localStorage.clear();
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/", { replace: true });
        setLoading(false);
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        techs,
        setTechs,
        loading,
        setLoading,
        logIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
