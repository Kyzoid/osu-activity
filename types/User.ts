import Score from './Score';

export type UserKeys = '4K' | '7K' | 'XK';

export type UserScores = '1000' | '999' | '998' | '997' | '996' | 'Lower';

export type UserCountryFirstPlace = {
  beatmapId: number;
  keys: string;
}

type User = {
  id: number;
  username: string;
  accuracy: number;
  globalRank: number;
  countryRank?: number;
  pp: number;
  scores: Score[];
  countryFirstPlaces?: UserCountryFirstPlace[];
  countryFirstPlacesCount?: { [keys in UserKeys]: number };
  countryFirstPlacesTotal?: number;
  countryFirstPlacesScoreCount?: { [keys in UserScores]: number };
  countryFirstPlacesScoreAverage?: number;
  isRanked: boolean;
  isActive: boolean;
  playCount: number;
}

export default User;