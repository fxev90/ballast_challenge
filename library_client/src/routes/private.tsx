import { Button } from "@/components/ui/button";
import storage from "@/utils/storage";

export const protectedRoutes = [
  {
    path: "/*",
    element: (
      <>
        Logged In!
        <Button
          onClick={() => {
            storage.clearToken();
            storage.clearUser();
            window.location.assign(window.location.origin as unknown as string);
          }}
        >
          Logout
        </Button>
      </>
    ),
  },
];
