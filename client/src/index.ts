import { Application, Assets, Container } from "pixi.js";
import manifest from "./manifest.json";
import { NavigationManager } from "@app/engine/nagivation/NavigationManager.ts";
import { LoginScreen } from "@app/screens/LoginScreen.ts";

(async () => {
  const app = new Application();
  await app.init({ background: "black", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  await Assets.init({ manifest, basePath: "public/assets" });
  const background = new Container({});

  const navigationManager = new NavigationManager(
    app.stage,
    app.ticker,
    background,
  );

  await navigationManager.showScreen(new LoginScreen());
})();
