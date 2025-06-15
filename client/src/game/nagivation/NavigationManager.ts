import { Assets, Container, Ticker } from "pixi.js";
import { AppStage } from "./AppStage.ts";

export class NavigationManager {
  private mainContainer: Container = new Container();
  private background?: Container;
  private currentScreen?: AppStage;
  private ticker: Ticker;

  constructor(stage: Container, ticker: Ticker, background?: Container) {
    stage.addChild(this.mainContainer);
    this.background = background;
    this.ticker = ticker;

    if (this.background) {
      this.mainContainer.addChild(this.background);
    }
  }

  public async showScreen(screen: AppStage): Promise<void> {
    if (this.currentScreen) {
      this.currentScreen.interactiveChildren = false;
    }

    const onLoad = screen.onLoad();
    if (screen.bundles().length > 0) {
      await Assets.loadBundle(screen.bundles(), (progress) => {
        if (onLoad) onLoad(progress * 100);
      });

      if (onLoad) onLoad(100);
    }

    if (this.currentScreen) {
      await this.hideAndRemoveScreen(this.currentScreen);
    }

    screen.prepare();
    screen.resize(this.mainContainer.width, this.mainContainer.height);

    const onUpdate = screen.onUpdate();
    if (onUpdate) {
      this.ticker.add(onUpdate, screen);
    }

    this.mainContainer.addChild(screen);

    screen.interactiveChildren = false;
    await screen.show();
    screen.interactiveChildren = true;

    this.currentScreen = screen;
  }

  public async hideAndRemoveScreen(screen: AppStage): Promise<void> {
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

  public getStageSize() {
    return {
      width: this.mainContainer.width,
      height: this.mainContainer.height,
    };
  }
}
