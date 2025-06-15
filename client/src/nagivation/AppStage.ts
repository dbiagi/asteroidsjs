import { Container, Ticker } from "pixi.js";

export type UpdateFunction = (time: Ticker) => void;
export type OnLoadFunction = (progress: number) => void;
export type HideFunction = () => void;
export type ResetFunction = () => void;

export abstract class AppStage extends Container {
  abstract id(): string;

  show(): Promise<void> {
    return Promise.resolve();
  }

  hide(): HideFunction | null {
    return null;
  }

  onLoad(): OnLoadFunction | null {
    return null;
  }

  pause(): void {}

  resume(): void {}

  reset(): ResetFunction | null {
    return null;
  }

  destroy(): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resize(_width: number, _height: number): void {}

  onUpdate(): UpdateFunction | null {
    return null;
  }

  prepare(): void {}

  bundles(): string[] {
    return [];
  }
}
