export type Player = 'X' | 'O' | null;
export type BoardState = Player[];

export interface GameStats {
  xWins: number;
  oWins: number;
  draws: number;
}