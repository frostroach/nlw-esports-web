import React, { FormEvent, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import NotFoundDuo from "../NotFoundDuo";
import ZincInput from "../Form/Input";
import { Check, GameController } from "phosphor-react";
import { CreateAdPayload, GameListItem } from "../../types/Game";
import { postAd } from "../../services/games";

type CreateAdModalProps = {
  gamesList: GameListItem[];
};

const CreateAdModal: React.FC<CreateAdModalProps> = ({ gamesList }) => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [isUsingDiscord, setIsUsingDiscord] = useState(false);

  const handleDaySelectionClass = (day: string): string => {
    const className = `rounded w-8 h-8 ${
      weekDays.includes(day) ? "bg-violet-500" : "bg-zinc-900"
    }`;

    return className;
  };

  const handleDiscordUse = (): void => {
    setIsUsingDiscord(!isUsingDiscord);
  };

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();

    //para que isso funcione, os campos devem ter name e id
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const payload = {
      ...data,
      useVoiceChannel: isUsingDiscord,
      gameId: data.game,
      weekDays: weekDays.map(Number),
      yearsPlaying: Number(data.yearsPlaying),
    };

    try {
      postAd(payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog.Root>
      <NotFoundDuo />
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
            <form
              onSubmit={handleFormSubmit}
              className="mt-8 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2 ">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                {/* <ZincInput
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                /> */}
                <select
                  id="game"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                  defaultValue={""}
                  name="game"
                >
                  <option disabled value="">
                    Selecione o game que deseja jogar
                  </option>
                  {gamesList.map((game) => (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Seu nome (ou nickname)
                </label>
                <ZincInput
                  id="name"
                  name="name"
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
                    name="yearsPlaying"
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
                    name="discord"
                    placeholder="Usuario#0000"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays" className="font-semibold">
                    Quando costuma jogar?
                  </label>

                  <ToggleGroup.Root
                    className="grid grid-cols-4 gap-3"
                    type="multiple"
                    value={weekDays}
                    onValueChange={setWeekDays}
                  >
                    <ToggleGroup.Item
                      value="0"
                      className={handleDaySelectionClass("0")}
                      title="Domingo"
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      className={handleDaySelectionClass("1")}
                      title="Segunda"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      className={handleDaySelectionClass("2")}
                      title="Terça"
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      className={handleDaySelectionClass("3")}
                      title="Quarta"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      className={handleDaySelectionClass("4")}
                      title="Quinta"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      className={handleDaySelectionClass("5")}
                      title="Sexta"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      className={handleDaySelectionClass("6")}
                      title="Sábado"
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-semibold">Qual horário do dia?</label>

                  <div className="grid grid-cols-2 gap-2">
                    <ZincInput
                      id="hourEnd"
                      type="time"
                      placeholder="Até"
                      name="hourEnd"
                    />

                    <ZincInput
                      id="hourStart"
                      type="time"
                      placeholder="De"
                      name="hourStart"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex text-sm gap-2 items-center ">
                {/* <ZincInput type={"checkbox"} id="voiceEnabled" /> */}
                <Checkbox.Root
                  className="bg-zinc-900 w-6 h-6 rounded items-center flex justify-center"
                  onCheckedChange={handleDiscordUse}
                  checked={isUsingDiscord}
                >
                  <Checkbox.Indicator>
                    <Check className="text-emerald-400" name="discord" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
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
  );
};

export default CreateAdModal;
