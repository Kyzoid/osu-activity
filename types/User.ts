import Score from './Score';

export default interface User {
  id: number;
  username: string;
  accuracy: number;
  globalRank: number;
  pp: number;
  scores: Score[];
  isRanked: boolean;
  isActive: boolean;
}