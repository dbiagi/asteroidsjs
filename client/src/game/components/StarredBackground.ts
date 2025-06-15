import { Container, Texture, TilingSprite } from "pixi.js";

// TODO: Change from a background static image to a dynamic particle animated background

export class StarredBackground extends Container {
  constructor(textureId: string, width: number, height: number) {
    super();

    const tilingSprite = new TilingSprite({
      texture: Texture.from(textureId),
      width,
      height,
    });

    this.addChild(tilingSprite);
  }
}
