import { CreateBook, Dashboard } from "@/features/librarian";
import { Main } from "@/features/misc";
import { Navigate } from "react-router-dom";

const redirection = {
  path: "/",
  element: <Navigate to="/dashboard" replace />,
};

export const protectedRoutes = {
  Librarian: [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        { path: "book/create", element: <CreateBook /> },
        redirection,
      ],
    },
  ],
  Member: [
    {
      path: "/",
      element: <Main />,
      children: [{ path: "dashboard", element: <>Dashboard</> }, redirection],
    },
  ],
};
