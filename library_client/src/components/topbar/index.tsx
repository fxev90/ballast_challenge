import { Roles } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PropsWithChildren } from "react";

type Props = {
  username?: [string, string];
  email: string;
  userType: Roles;
};

export const TopBar: React.FC<PropsWithChildren<Props>> = ({
  username,
  email,
  userType,
  children,
}) => {
  const getInitials = username
    ? `${username[0].charAt(0)}+${username[1].charAt(0)}`
    : userType.charAt(0);

  return (
    <nav className="bg-slate-900 p-4 flex items-center justify-between">
      <div className="flex">
        {children}
        <h1 className="hidden md:block mx-2 text-xl text-white font-semibold">
          {userType}
        </h1>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <span>Welcome, {email}</span>
        <Avatar data-testid="user-icon">
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${getInitials}`}
          />
          <AvatarFallback>{getInitials}</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
