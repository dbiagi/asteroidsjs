import { AppScreen } from "@app/engine/nagivation/AppScreen.ts";
import { Screen } from "@app/screens/Screen.ts";
import { Sprite, Texture } from "pixi.js";

const bundle = ["login"];

export class LoginScreen extends AppScreen {
  private button: Sprite = new Sprite();

  constructor() {
    super();
  }

  prepare(): void {
    this.button.texture = Texture.from("login/asteroid2.png");
    this.button.eventMode = "static";
    this.button.on("click", (e) => {
      console.log("button clicked", e);
    });
    this.position.set(100, 100);
    this.setSize(50, 50);

    this.addChild(this.button);
  }

  id(): string {
    return Screen.Login;
  }

  bundles(): string[] {
    return bundle;
  }
}
