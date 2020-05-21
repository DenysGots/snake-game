/* Interfaces */
export interface State {
  board: {
    size: number;
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
