export class Position {
  x: number = 0;
  y: number = 0;
}

export class Size {
  width: number = 0;
  height: number = 0;
}

export enum Direction {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

export type Movement = {
  [key in Direction]: number;
};

export class Vector {
  x: number = 0;
  y: number = 0;
}
