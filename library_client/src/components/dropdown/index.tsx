import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuItem } from "@/types";
import { ItemIcon } from "../icons";
import { Fragment } from "react";
import { Menu } from "lucide-react";

type Props = {
  userType: string;
  items: MenuItem[];
};

export const DropdownBar: React.FC<Props> = function ({ items, userType }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger datatest-id="trigger" asChild>
        <Menu className="mr-2 h-6 w-6 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{userType}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((menuItem) => {
          return (
            <Fragment key={`dp-${menuItem.key}`}>
              {menuItem.key === "Logout" && <DropdownMenuSeparator />}
              <DropdownMenuItem onClick={menuItem.cb}>
                <ItemIcon
                  datatest-id={`item-icon-${menuItem.key}`}
                  itemKey={menuItem.key}
                  className="mr-2 h-4 w-4"
                />
                <span>{menuItem.name}</span>
              </DropdownMenuItem>
            </Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
