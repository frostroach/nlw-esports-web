import React from "react";
import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/icons/logo.svg";

type GameItemProps = {
  ads: number;
  id: string;
  image: string;
  link: string;
  name: string;
};

const games: GameItemProps[] = [
  {
    ads: 4,
    id: "1",
    image: "/league-game.png",
    link: "tests",
    name: "League of Legends",
  },
  {
    ads: 3,
    id: "2",
    image: "/apex-game.png",
    link: "tests",
    name: "Apex Legends",
  },
  {
    ads: 10,
    id: "3",
    image: "/counter-game.png",
    link: "tests",
    name: "Counter Strike",
  },
  {
    ads: 6,
    id: "4",
    image: "/wow-game.png",
    link: "tests",
    name: "World of Warcraft",
  },
  {
    ads: 2,
    id: "5",
    image: "/dota-game.png",
    link: "tests",
    name: "Dota 2",
  },
  {
    ads: 0,
    id: "6",
    image: "/fortnite-game.png",
    link: "tests",
    name: "Fornite",
  },
];

const renderGames = (data: GameItemProps): JSX.Element => {
  return (
    <a href={data.link} className="relative rounded-lg overflow-hidden">
      <img src={data.image} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{data.name}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {data.ads} anúncios
        </span>
      </div>
    </a>
  );
};

const App: React.FC = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-duo-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(renderGames)}
      </div>

      <div className="pt-1 bg-nlw-duo-gradient self-stretch rounded-lg mt-8">
        <div className="bg-[#2a2634] px-8 py-6 self-stretch  rounded-b-lg justify-between flex items-center">
          <div>
            <strong className="text-white font-black block text-2xl">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button
            className="bg-violet-500 rounded-lg text-white px-4 py-4 hover:bg-violet-700 
          transition-all flex items-center gap-3"
          >
            <MagnifyingGlassPlus size={18} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
