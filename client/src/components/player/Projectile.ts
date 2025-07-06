import { Vector } from "@app/domain/Dimensions";
import { Container, Sprite, Texture } from "pixi.js";

export class Projectile extends Container {
  private sprite: Sprite;
  direction?: Vector;

  constructor(textureId: string) {
    super();

    this.sprite = new Sprite({
      texture: Texture.from(textureId),
    });
    this.addChild(this.sprite);
  }
}
