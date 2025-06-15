import { Application, Assets } from "pixi.js";
import manifest from "@app/manifest.json";
import { NavigationManager } from "@app/game/nagivation/NavigationManager.ts";
import { MainStage } from "@app/game/stages/MainStage.ts";
import { stateManager } from "@app/game/state/state.ts";

const containerId = "gameContainer";

(async () => {
  const app = new Application();
  await app.init({ background: "black", resizeTo: window });

  // @ts-expect-error TS7017: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
  globalThis.__PIXI_APP__ = app;

  document.getElementById(containerId)!.appendChild(app.canvas);

  await Assets.init({ manifest, basePath: "assets" });

  stateManager.setCurrentUser({
    id: window.crypto.randomUUID(),
    username: "Guest_" + Math.floor(Math.random() * 1000),
  });

  stateManager.setStageSize({
    width: app.renderer.width,
    height: app.renderer.height,
  });

  const navigationManager = new NavigationManager(app.stage, app.ticker);

  await navigationManager.showScreen(new MainStage());
})();
