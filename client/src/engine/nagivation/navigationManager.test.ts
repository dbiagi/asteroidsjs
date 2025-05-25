import { Container, Ticker } from "pixi.js";
import { NavigationManager } from "@app/engine/nagivation/NavigationManager.ts";

describe("NavigationManager", () => {
  const container = new Container();
  const ticker = new Ticker();
  const navigationManager = new NavigationManager(container, ticker);

  describe("showScreen", () => {
    it("given a bundle array should call Assets.loadBundle with the bundle array", () => {
      // TODO: mock is not working properly
    });
  });
});
