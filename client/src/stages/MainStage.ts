import { AppStage, HideFunction } from "@app/nagivation/AppStage";
import { StageType } from "@app/stages/StageType";
import { Container, Sprite, Texture } from "pixi.js";
import { StarredBackground } from "@app/components/StarredBackground";
import { assets } from "@app/assets";
import { Player } from "@app/domain/Player";

export class MainStage extends AppStage {
  private container: Container = new Container();
  private background?: StarredBackground;
  private asteroid: Container = new Container();
  private localPlayer: Player = new Player();

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
    this.background = new StarredBackground(assets.BlackBackgroundWithStars);
    this.addChild(this.background);

    this.container.position.set(10, 10);
    this.container.scale.set(0.5, 0.5);
    const img = new Sprite(Texture.from(assets.SmallAsteroid));
    this.asteroid.addChild(img);
    this.container.addChild(this.asteroid);
    this.addChild(this.container);
  }

  async show(): Promise<void> {
    this.setupKeyAdapters();
  }

  resize(w: number, h: number): void {
    this.background?.setSize(w, h);
  }

  hide(): HideFunction | null {
    return () => this.removeKeyAdapters;
  }

  onKeydown(e: KeyboardEvent) {
    console.log(e);

    switch (e.key) {
      case "ArrowRight":
        this.asteroid.x += 10;
        break;
      case "ArrowLeft":
        this.asteroid.x -= 10;
        break;
      case "ArrowUp":
        this.asteroid.y -= 10;
        break;
      case "ArrowDown":
        this.asteroid.y += 10;
        break;
    }
  }

  private setupKeyAdapters() {
    window.addEventListener("keydown", (e) => this.onKeydown(e));
  }

  private removeKeyAdapters() {
    window.removeEventListener("keydown", (e) => this.onKeydown(e));
  }
}
