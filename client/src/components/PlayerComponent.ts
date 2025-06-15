import { Player } from "@app/domain/Player";
import { Sprite, Texture } from "pixi.js";

export class PlayerComponent extends Sprite {
  private player: Player = new Player();

  constructor() {
    super();

    this.texture = Texture.from("");
  }
}
