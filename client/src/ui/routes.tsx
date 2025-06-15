import { createBrowserRouter } from "react-router";
import { Root } from "@app/ui/Root.tsx";
import { GamePage } from "@app/ui/pages/GamePage.tsx";
import { LoginPage } from "@app/ui/pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: LoginPage,
      },
      {
        path: "/play",
        Component: GamePage,
      },
    ],
  },
]);

export default router;
