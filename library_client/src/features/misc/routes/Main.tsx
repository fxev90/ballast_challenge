import { DropdownBar } from "@/components/dropdown";
import { SideBar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import { User } from "@/features/auth";
import { clearSession, useLogout } from "@/features/auth/api/logout";
import { MenuItem } from "@/types";
import storage from "@/utils/storage";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Main = () => {
  const user = storage.getUser();
  const navigate = useNavigate();

  if (!user) {
    clearSession();
  }
  const { names, last_names, email, user_type } = user as User;

  const { mutate } = useLogout();

  const logoutCallback = () => {
    mutate(email);
  };

  const logoutItem = {
    key: "Logout",
    name: "Log Out",
    cb: logoutCallback,
  };

  const navigationAccess: { Librarian: MenuItem[]; Member: MenuItem[] } = {
    Librarian: [
      {
        key: "Dashboard",
        name: "Dashboard",
        cb: () => navigate("/dashboard"),
      },
      {
        key: "CreateBook",
        name: "Create Book",
        cb: () => navigate("/book/create"),
      },
      logoutItem,
    ],
    Member: [
      {
        key: "Dashboard",
        name: "Dashboard",
        cb: () => navigate("/dashboard"),
      },
      logoutItem,
    ],
  };

  return (
    <div className="flex flex-col">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            Loading
          </div>
        }
      >
        <TopBar
          username={[names, last_names]}
          email={email}
          userType={user_type}
        >
          <div className="md:hidden">
            <DropdownBar
              userType={user_type}
              items={navigationAccess[user_type]}
            />
          </div>
        </TopBar>
        <div className="flex">
          <SideBar items={navigationAccess[user_type]} />
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
