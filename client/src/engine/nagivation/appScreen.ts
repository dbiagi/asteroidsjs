import { Container } from "pixi.js";

type UpdateFunction = () => void;
type OnLoadFunction = (progress: number) => void;
type HideFunction = () => Promise<void>;
type ResetFunction = () => void;

export interface AppScreen extends Container {
  show(): Promise<void>;

  hide(): HideFunction | null;

  onLoad(): OnLoadFunction | null;

  pause(): void;

  resume(): void;

  reset(): ResetFunction | null;

  resize(width: number, height: number): void;

  onUpdate(): UpdateFunction | null;

  // Prepare screen before show
  prepare(): void;

  // Bundles necessary before show
  bundles(): string[];
}
