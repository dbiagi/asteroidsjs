import { Assets, Container, Ticker } from "pixi.js";
import { AppScreen } from "./appScreen.ts";

export class NavigationManager {
  private container: Container = new Container();
  private background?: Container;
  private currentScreen?: AppScreen;
  private ticker: Ticker;

  constructor(stage: Container, ticker: Ticker, background?: Container) {
    stage.addChild(this.container);
    this.background = background;
    this.ticker = ticker;

    if (this.background) {
      this.container.addChild(this.background);
    }
  }

  public async showScreen(screen: AppScreen): Promise<void> {
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
    screen.resize(this.container.width, this.container.height);

    const onUpdate = screen.onUpdate();
    if (onUpdate) {
      this.ticker.add(onUpdate, screen);
    }

    screen.interactiveChildren = false;
    await screen.show();
    screen.interactiveChildren = true;

    this.currentScreen = screen;
  }

  public async hideAndRemoveScreen(screen: AppScreen): Promise<void> {
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
  }
}
