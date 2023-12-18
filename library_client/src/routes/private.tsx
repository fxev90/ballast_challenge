import { CreateBook, Dashboard, EditBook } from "@/features/librarian";
import { Dashboard as MemberDashboad } from "@/features/member";
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
        { path: "book/edit/:bookId", element: <EditBook /> },
        redirection,
      ],
    },
  ],
  Member: [
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "dashboard", element: <MemberDashboad /> },
        redirection,
      ],
    },
  ],
};
