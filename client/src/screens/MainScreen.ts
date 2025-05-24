import {Container} from "pixi.js";
import {Cachorro} from "@app/engine/nagivation/appScreen.ts";

export class MainScreen extends Container {
  constructor() {
    super();

    new Cachorro()
  }
}