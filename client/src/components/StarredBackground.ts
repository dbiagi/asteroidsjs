import { Container, Texture, TilingSprite } from "pixi.js";

// TODO: Change from a background static image to a dynamic particle animated background

export class StarredBackground extends Container {
  private tilingSprite: TilingSprite;

  constructor(textureId: string) {
    super();

    this.tilingSprite = new TilingSprite({
      texture: Texture.from(textureId)
    });

    this.addChild(this.tilingSprite);
  }

  setSize(width: number, height: number): void {
    if (this.tilingSprite) {
      this.tilingSprite.width = width;
      this.tilingSprite.height = height;
    }
  }
}
