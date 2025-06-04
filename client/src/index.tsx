import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { App } from "@app/ui/App.tsx";
import "./styles/main.css";

(async () => {
  // const app = new Application();
  // await app.init({ background: "black", resizeTo: window });
  //
  // document.getElementById("pixi-container")!.appendChild(app.canvas);
  //
  // await Assets.init({ manifest, basePath: "public/assets" });
  // const background = new Container({});
  //
  // const navigationManager = new NavigationManager(
  //   app.stage,
  //   app.ticker,
  //   background,
  // );
  //
  // await navigationManager.showScreen(new LoginScreen());
})();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
);
