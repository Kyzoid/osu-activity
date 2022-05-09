import Score from './Score';

export type UserKeysType = '4K' | '7K' | 'XK';

export default interface User {
  id: number;
  username: string;
  accuracy: number;
  globalRank: number;
  countryRank?: number;
  pp: number;
  scores: Score[];
  countryFirstPlaces?: number[];
  countryFirstPlacesCount?: { [keys in UserKeysType]: number };
  isRanked: boolean;
  isActive: boolean;
  playCount: number;
}