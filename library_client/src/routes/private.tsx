import { Dashboard } from "@/features/librarian/routes/dashboard";
import { Main } from "@/features/misc";
import { Navigate } from "react-router-dom";

/*const { DiscussionsRoutes } = lazyImport(
  () => import('@/features/discussions'),
  'DiscussionsRoutes'
);*/

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
        { path: "book/create", element: <>Create a Book</> },
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
