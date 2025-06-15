import { AppStage } from "@app/game/nagivation/AppStage.ts";
import { StageType } from "@app/game/stages/StageType.ts";
import { Container, Sprite, Texture } from "pixi.js";
import { StarredBackground } from "@app/game/components/StarredBackground.ts";
import { stateManager } from "@app/game/state/state.ts";

const assetsMap = {
  BlackStars: "main/background/background_blackstars.jpg",
  SmallAsteroid: "asteroid.png",
};

export class MainStage extends AppStage {
  private container: Container = new Container();

  constructor() {
    super();
  }

  id(): string {
    return StageType.Main;
  }

  bundles(): string[] {
    return ["main"];
  }

  prepare(): void {
    const size = stateManager.getStageSize();
    const background = new StarredBackground(
      assetsMap.BlackStars,
      size.width,
      size.height,
    );
    this.addChild(background);

    this.container.position.set(10, 10);
    this.container.scale.set(0.5, 0.5);
    const img = new Sprite(Texture.from(assetsMap.SmallAsteroid));
    this.container.addChild(img);
    this.addChild(this.container);
  }

  async show(): Promise<void> {}
}
