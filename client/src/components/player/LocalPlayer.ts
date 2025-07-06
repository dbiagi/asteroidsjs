import { Direction, Movement } from "@app/domain/Dimensions";
import { Player, PlayerInitOptions } from "./Player";
import { Projectile } from "./Projectile";

export class LocalPlayer extends Player {
  private speed: number = 8;
  private projectiles: Projectile[] = [];
  private currentProjectileTemplate?: Projectile;

  private movement: Movement = {
    [Direction.UP]: 0,
    [Direction.DOWN]: 0,
    [Direction.RIGHT]: 0,
    [Direction.LEFT]: 0,
  };

  override init(opts: PlayerInitOptions) {
    super.init(opts);
    this.currentProjectileTemplate = new Projectile(opts.projectileTextureId);
  }

  move(direction: Direction) {
    this.movement[direction] = this.speed;
  }

  stop(direction: Direction) {
    this.movement[direction] = 0;
  }

  update(delta: number) {
    if (!this.isMoving()) {
      return;
    }

    const x =
      this.position.x +
      (this.movement[Direction.RIGHT] - this.movement[Direction.LEFT]) * delta;
    const y =
      this.position.y +
      (this.movement[Direction.DOWN] - this.movement[Direction.UP]) * delta;

    this.position.set(x, y);
  }

  fire() {

  }

  private isMoving(): boolean {
    const movingDirections = Object.values(this.movement).filter((e) => {
      return e !== 0;
    });

    return movingDirections.length !== 0;
  }
}
