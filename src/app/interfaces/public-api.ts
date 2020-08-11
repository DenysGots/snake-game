import { HelpersService } from "../services/helpers.service";

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
  slow = 'SLOW',
  medium = 'MEDIUM',
  fast = 'FAST'
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

export enum ChangeGameSpeedDelay {
  slow = 30000,
  medium = 40000
}

export enum FoodAppearanceDelay {
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
  difficulty: Difficulty.slow,
  gameSpeed: GameSpeed.slow,
  movementDirection: MovementDirection.top
};

export const PositionChangeValues = {
  [MovementDirection.top]: {
    [BoardSize.small]: -BoardSize.small,
    [BoardSize.medium]: -BoardSize.medium,
    [BoardSize.large]: -BoardSize.large,
  },
  [MovementDirection.right]: {
    [BoardSize.small]: 1,
    [BoardSize.medium]: 1,
    [BoardSize.large]: 1,
  },
  [MovementDirection.bottom]: {
    [BoardSize.small]: BoardSize.small,
    [BoardSize.medium]: BoardSize.medium,
    [BoardSize.large]: BoardSize.large,
  },
  [MovementDirection.left]: {
    [BoardSize.small]: -1,
    [BoardSize.medium]: -1,
    [BoardSize.large]: -1,
  },
};

// TODO: use this to navigate snake cells across fields and to check out of bounds:
//  if cell new position is not inside current row in case LEFT RIGHT movement
//  and less than 1 or more than max cell index if UP and DOWN
export const GameBoardsIndexes: { [key: number]: number[][] } = {
  [BoardSize.small]: HelpersService.createArrayOfArrayWithIndexes(BoardSize.small),
  [BoardSize.medium]: HelpersService.createArrayOfArrayWithIndexes(BoardSize.medium),
  [BoardSize.large]: HelpersService.createArrayOfArrayWithIndexes(BoardSize.large),
}
