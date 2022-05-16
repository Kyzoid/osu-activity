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
  pp: number;
  scores: Score[];
  isRanked: boolean;
  isActive: boolean;
  playCount: number;
  coverUrl?: string;
  avatarUrl?: string;
  countryRank?: number;

  // COUNTRY FIRST PLACE
  cfp?: UserCountryFirstPlace[];

  cfpCountByKeys?: { [key in UserKeys]: number };
  cfpCountByKeysAndScores?: { [key in UserKeys]: { [score in UserScores]: number } };
  cfpCountByScores?: { [score in UserScores]: number };
  cfpCount?: number;

  cfpScoreAverageByKeys?: { [key in UserKeys]: number };
  cfpScoreAverage?: number;
}

export default User;