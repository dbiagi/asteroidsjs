import { Application, Assets, Container } from "pixi.js";
import { NavigationManager } from "@app/game/nagivation/NavigationManager.ts";
import { MainStage } from "@app/game/stages/MainStage.ts";
import manifest from "@app/manifest.json";

export type GameInitOptions = {
  containerId: string;
};

export class Game {
  async init(opts: GameInitOptions): Promise<void> {
    const app = new Application();
    await app.init({ background: "black", resizeTo: window });
    // @ts-ignore
    globalThis.__PIXI_APP__ = app;

    document.getElementById(opts.containerId)!.appendChild(app.canvas);

    await Assets.init({ manifest, basePath: "public/assets" });
    const background = new Container();

    const navigationManager = new NavigationManager(
      app.stage,
      app.ticker,
      background,
    );
    await navigationManager.showScreen(new MainStage());
  }
}
