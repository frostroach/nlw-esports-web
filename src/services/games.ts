import { AxiosResponse } from "axios";
import { GameListItem } from "../types/Game";
import { get } from "./api";

export const getGames = (): Promise<AxiosResponse<GameListItem[]>> =>
  get({ url: "/games" });
