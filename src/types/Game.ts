export type BaseGame = {
  ads: number;
  id: string;
  image: string;
  link: string;
  name: string;
};

export type GameListItem = {
  bannerUrl: string;
  id: string;
  title: string;
  adsCount: number;
  _count: { ads: number };
};

export type CreateAdPayload = {
  gameId: string;
  discord: string;
  name: string;
  yearsPlaying: number;
  weekDays: number[];
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
};
