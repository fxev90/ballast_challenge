import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./private";
import { publicRoutes } from "./public";
import storage from "@/utils/storage";

export const AppRoutes = () => {
  const auth = storage.getUser();

  const routes = auth?.id ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
