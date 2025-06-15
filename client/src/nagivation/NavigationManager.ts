import { Assets, Container, Ticker } from "pixi.js";
import { AppStage } from "./AppStage.ts";
import { stateManager } from "../state/state.ts";

export class NavigationManager {
  private mainContainer: Container = new Container();
  private background?: Container;
  private currentStage?: AppStage;
  private ticker: Ticker;

  constructor(stage: Container, ticker: Ticker, background?: Container) {
    stage.addChild(this.mainContainer);
    this.background = background;
    this.ticker = ticker;

    if (this.background) {
      this.mainContainer.addChild(this.background);
    }
  }

  async showStage(stage: AppStage): Promise<void> {
    if (this.currentStage) {
      this.currentStage.interactiveChildren = false;
    }

    const onLoad = stage.onLoad();
    if (stage.bundles().length > 0) {
      await Assets.loadBundle(stage.bundles(), (progress) => {
        if (onLoad) onLoad(progress * 100);
      });

      if (onLoad) onLoad(100);
    }

    if (this.currentStage) {
      await this.hideAndRemoveStage(this.currentStage);
    }

    const size = stateManager.getStageSize();
    stage.prepare();
    stage.resize(size.width, size.height);

    const onUpdate = stage.onUpdate();
    if (onUpdate) {
      this.ticker.add(onUpdate, stage);
    }

    this.mainContainer.addChild(stage);

    stage.interactiveChildren = false;
    await stage.show();
    stage.interactiveChildren = true;

    this.currentStage = stage;
  }

  async hideAndRemoveStage(screen: AppStage): Promise<void> {
    screen.interactiveChildren = false;

    screen.hide()?.();

    const onUpdate = screen.onUpdate();
    if (onUpdate) {
      this.ticker.remove(onUpdate, screen);
    }

    if (screen.parent) {
      screen.parent.removeChild(screen);
    }

    screen.reset()?.();
    screen.destroy();
  }

  resize(w: number, h: number): void {
    if (this.currentStage) {
      this.currentStage.resize(w, h);
    }
  }
}
