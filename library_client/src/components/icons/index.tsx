import { LogOut, LayoutDashboard, BookUp, BookMarked } from "lucide-react";

export const ItemIcon: React.FC<{ itemKey: string; className: string }> = ({
  itemKey,
  className,
}) => {
  switch (itemKey) {
    case "Dashboard":
      return <LayoutDashboard className={className} />;
    case "CreateBook":
      return <BookUp className={className} />;
    case "Logout":
      return <LogOut className={className} />;
    default:
      return <BookMarked className={className} />;
  }
};
