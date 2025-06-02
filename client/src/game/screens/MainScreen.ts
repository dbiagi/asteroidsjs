import { AppScreen } from "@app/game/engine/nagivation/AppScreen.ts";
import { Screen } from "@app/game/screens/Screen.ts";

export class MainScreen extends AppScreen {
  constructor() {
    super();
  }

  id(): string {
    return Screen.Main;
  }
}
