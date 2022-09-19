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
