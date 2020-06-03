/* Interfaces */
export interface BoardState extends Object {
  board: {
    size: BoardSize;
    food: { cellId: number }[];
  };
  snake: {
    segments: { cellId: number }[];
  };
  difficulty: Difficulty;
  gameSpeed: GameSpeed;
  movementDirection: MovementDirection;
}

/* Types */
export type ConfigFile = {
  usedHost?: string;
  noErrorsMode?: boolean;
};

/* Enums */
export enum Difficulty {
  easy = 'EASY',
  medium = 'MEDIUM',
  hard = 'HARD'
}

export enum CellType {
  empty = 'EMPTY',
  snake = 'SNAKE',
  food = 'FOOD'
}

export enum MovementDirection {
  top = 'TOP',
  right = 'RIGHT',
  bottom = 'BOTTOM',
  left = 'LEFT'
}

export enum BoardSize {
  small = 7,
  medium = 11,
  large = 15
}

export enum StartingPosition {
  small = 25,
  medium = 61,
  large = 113
}

export enum GameSpeed {
  slow = 3000,
  medium = 4000,
  fast = 5000
}

export enum FoodAppearanceSpeed {
  slow = 10000,
  medium = 8000,
  fast = 6000
}

/* Variables */
export const initialState: BoardState = {
  board: {
    size: BoardSize.medium,
    food: []
  },
  snake: {
    segments: [
      {
        cellId: StartingPosition.medium
      }
    ]
  },
  difficulty: Difficulty.easy,
  gameSpeed: GameSpeed.slow,
  movementDirection: MovementDirection.top
};
