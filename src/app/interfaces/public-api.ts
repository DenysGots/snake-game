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
