import { AppStage } from "@app/game/nagivation/AppStage.ts";
import { StageType } from "@app/game/stages/StageType.ts";

export class MainStage extends AppStage {
  constructor() {
    super();
  }

  id(): string {
    return StageType.Main;
  }

  bundles(): string[] {
    return ["main"];
  }

  prepare(): void {
    console.log("MainStage initialized");


  }
}
