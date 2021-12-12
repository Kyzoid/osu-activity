import Score from './Score';

export default interface User {
  id: number;
  username: string;
  accuracy: number;
  globalRank: number;
  countryRank?: number;
  pp: number;
  scores: Score[];
  countryFirstPlaces?: number[];
  countryFirstPlacesCount?: number;
  isRanked: boolean;
  isActive: boolean;
}