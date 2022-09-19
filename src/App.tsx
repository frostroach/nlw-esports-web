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

      <Dialog.Root>
        <NotFoundDuo onPressPublish={handlePublishPress} />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content
            className="bg-[#2A2634] fixed py-8 px-10 text-white 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
          >
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <Dialog.Description>
              {/* flex e flex col fazem com que seja exibido como colunas, gap é o espaçamento entre
              cada uma delas */}
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="game" className="font-semibold">
                    Qual o game?
                  </label>
                  <ZincInput
                    id="game"
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold">
                    Seu nome (ou nickname)
                  </label>
                  <ZincInput
                    id="name"
                    type="text"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying" className="font-semibold">
                      Joga há quantos anos?
                    </label>
                    <ZincInput
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem ser zero"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord" className="font-semibold">
                      Qual seu discord?
                    </label>
                    <ZincInput
                      id="discord"
                      type="text"
                      placeholder="Usuario#0000"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays" className="font-semibold">
                      Quando costuma jogar?
                    </label>

                    <div className="grid grid-cols-4 gap-3">
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Domingo"
                      >
                        D
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Segunda"
                      >
                        S
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Terça"
                      >
                        T
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Sexta"
                      >
                        S
                      </button>
                      <button
                        className="bg-zinc-900 rounded w-8 h-8"
                        title="Sábado"
                      >
                        S
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label className="font-semibold">
                      Qual horário do dia?
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      <ZincInput id="hourEnd" type="time" placeholder="Até" />

                      <ZincInput id="hourStart" type="time" placeholder="De" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex text-sm gap-2">
                  <ZincInput type={"checkbox"} id="voiceEnabled" />
                  <span>Costumo me conectar ao chat de voz</span>
                </div>

                <div className="flex mt-4 justify-end gap-2">
                  <Dialog.Close
                    className="bg-zinc-500 px-5 py-3 rounded-[6px] font-semibold transition-all hover:bg-zinc-600"
                    type="button"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    type={"submit"}
                    className="bg-violet-500 rounded-[6px] px-5 py-3 flex items-center gap-3 hover:bg-violet-700 transition-all"
                  >
                    <GameController />
                    Encontrar Duo
                  </button>
                </div>
              </form>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default App;
