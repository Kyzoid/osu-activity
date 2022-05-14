type EventHistory = {
  userId: number;
  username: string;
  createdAt: string;
  type: string;
  avatarURL: string;

  mods?: string[];
  lastRank?: number;
  newRank?: number;
  rankDifference?: number;
  accuracy?: number;
  beatmapDifficulty?: string;
  beatmapId?: number;
  beatmapTitle?: string;
  beatmapsetId?: number;
  artist?: string;
  pp?: number;
  rank?: string;
}

export default EventHistory;