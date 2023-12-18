import { MenuItem } from "@/types";
import { Fragment } from "react";
import { ItemIcon } from "../icons";
import { Separator } from "../ui/separator";

export const SideBar: React.FC<{ items: MenuItem[] }> = function ({ items }) {
  return (
    <aside className="hidden md:block bg-slate-600 text-white w-64 min-h-screen p-4 space-y-2">
      {items.map((item) => {
        return (
          <Fragment key={`sidebar-${item.key}`}>
            {item.key === "Logout" && (
              <Separator data-testid="logout-separator" />
            )}
            <div
              className="flex items-center justify-between p-2 hover:bg-slate-400 cursor-pointer"
              onClick={item.cb}
            >
              <div className="flex items-center">
                <ItemIcon itemKey={item.key} className="mr-2 h-4 w-4" />
                <span data-testid={`item-name-${item.key}`}>{item.name}</span>
              </div>
            </div>
          </Fragment>
        );
      })}
    </aside>
  );
};
