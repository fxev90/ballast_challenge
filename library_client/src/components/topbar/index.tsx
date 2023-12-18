import { Roles } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const TopBar: React.FC<{
  username?: [string, string];
  email: string;
  userType: Roles;
}> = ({ username, email, userType }) => {
  const getInitials = username
    ? `${username[0].charAt(0)}+${username[1].charAt(0)}`
    : userType.charAt(0);

  return (
    <nav className="bg-slate-900 p-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl text-white font-semibold">
          You have access as a {userType}
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
