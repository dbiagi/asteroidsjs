import { Container, Sprite, Texture } from "pixi.js";

export type PlayerInitOptions = {
  playerTextureId: string;
  projectileTextureId: string;
};

export class Player extends Container {
  protected playerSprite?: Sprite;
  protected projectileSprite?: Sprite;

  init(opts: PlayerInitOptions) {
    this.playerSprite = new Sprite({
      texture: Texture.from(opts.playerTextureId),
    });
    this.addChild(this.playerSprite);

    this.projectileSprite = new Sprite({
      texture: Texture.from(opts.projectileTextureId),
    });
  }
}
