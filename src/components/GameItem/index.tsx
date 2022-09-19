import React from "react";
import { BaseGame, GameListItem } from "../../types/Game";

type GameItemProps = {
  data: GameListItem;
};

const GameItem: React.FC<GameItemProps> = ({ data }) => {
  return (
    <a href={"/"} className="relative rounded-lg overflow-hidden">
      <img src={data.bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{data.title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {data.adsCount} anúncios
        </span>
      </div>
    </a>
  );
};

export default GameItem;
