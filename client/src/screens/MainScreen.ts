import { AppScreen } from "@app/engine/nagivation/AppScreen.ts";
import { Screen } from "@app/screens/Screen.ts";

export class MainScreen extends AppScreen {
  constructor() {
    super();
  }

  id(): string {
    return Screen.Main;
  }
}
