/* Interfaces */
export interface BoardState extends Object {
  board: {
    size: BoardSize;
    food: []
  };
  snake: {
    segments: [];
  };
  difficulty: Difficulty
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

export enum BoardSize {
 small = 7,
 medium = 10,
 large = 15,
 extraLarge = 20
}

/* Variables */
export const initialState: BoardState = {
  board: {
    size: BoardSize.medium,
    food: []
  },
  snake: {
    segments: [] // TODO must be initialized at the center of the board
  },
  difficulty: Difficulty.medium
};
