import {
  AppStage,
  HideFunction,
  UpdateFunction,
} from "@app/nagivation/AppStage";
import { StageType } from "@app/stages/StageType";
import { Container, Sprite, Texture, Ticker } from "pixi.js";
import { StarredBackground } from "@app/components/StarredBackground";
import { assets } from "@app/assets";
import { LocalPlayer } from "@app/components/player/LocalPlayer";
import { Direction } from "@app/domain/Dimensions";

export class MainStage extends AppStage {
  private container: Container = new Container();
  private background?: StarredBackground;
  private asteroid: Container = new Container();
  private localPlayer: LocalPlayer = new LocalPlayer();

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

    this.localPlayer.init({
      playerTextureId: assets.BlueSpaceship,
      projectileTextureId: assets.PlayerProjectile,
    });
    this.localPlayer.position.set(30, 30);
    this.container.addChild(this.localPlayer);
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

  onUpdate(): UpdateFunction | null {
    return (time: Ticker) => {
      this.localPlayer.update(time.deltaTime);
    };
  }

  private onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
        this.localPlayer.move(Direction.RIGHT);
        break;
      case "ArrowLeft":
        this.localPlayer.move(Direction.LEFT);
        break;
      case "ArrowUp":
        this.localPlayer.move(Direction.UP);
        break;
      case "ArrowDown":
        this.localPlayer.move(Direction.DOWN);
        break;
      case "Space":
        this.localPlayer.fire();
        break;
    }
  }

  private onKeyUp(e: KeyboardEvent) {
    console.log(e.code);

    switch (e.key) {
      case "ArrowRight":
        this.localPlayer.stop(Direction.RIGHT);
        break;
      case "ArrowLeft":
        this.localPlayer.stop(Direction.LEFT);
        break;
      case "ArrowUp":
        this.localPlayer.stop(Direction.UP);
        break;
      case "ArrowDown":
        this.localPlayer.stop(Direction.DOWN);
        break;
    }
  }

  private setupKeyAdapters() {
    window.addEventListener("keydown", (e) => this.onKeyDown(e));
    window.addEventListener("keyup", (e) => this.onKeyUp(e));
  }

  private removeKeyAdapters() {
    window.removeEventListener("keyup", (e) => this.onKeyUp(e));
    window.removeEventListener("keydown", (e) => this.onKeyDown(e));
  }
}
