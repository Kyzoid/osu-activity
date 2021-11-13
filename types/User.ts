import Score from './Score';

export default interface User {
  id: number;
  username: string;
  scores: Score[];
}