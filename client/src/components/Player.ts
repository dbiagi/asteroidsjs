import { Container, Sprite, Texture } from "pixi.js";

export type PlayerInitOptions = {
  textureId: string;
};

export class Player extends Container {
  protected sprite?: Sprite;

  init(opts: PlayerInitOptions) {
    this.sprite = new Sprite({
      texture: Texture.from(opts.textureId),
    });

    this.addChild(this.sprite);
  }
}
