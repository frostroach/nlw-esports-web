import React, { useEffect, useState } from "react";
import "./styles/main.css";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

import logoImg from "./assets/icons/logo.svg";
import NotFoundDuo from "./components/NotFoundDuo";
import GameItem from "./components/GameItem";
import ZincInput from "./components/Form/Input";
import { GameListItem } from "./types/Game";

import { getGames } from "./services/games";
import CreateAdModal from "./components/CreateAdModal";

const App: React.FC = () => {
  const [gamesList, setGamesList] = useState<GameListItem[]>([]);

  const renderGames = (data: GameListItem): JSX.Element => {
    return <GameItem data={data} key={data.id} />;
  };

  const handlePublishPress = (): void => {
    console.log("press publish");
  };

  const loadGames = async (): Promise<void> => {
    try {
      const response = await getGames();
      const updatedResponse = response.data.map((item) => ({
        ...item,
        adsCount: item._count.ads,
      }));
      setGamesList(updatedResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

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
        {gamesList.map(renderGames)}
      </div>

      <CreateAdModal gamesList={gamesList} />
    </div>
  );
};

export default App;
