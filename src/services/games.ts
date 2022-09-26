import { AxiosResponse } from "axios";
import { CreateAdPayload, GameListItem } from "../types/Game";
import { get, post } from "./api";

export const getGames = (): Promise<AxiosResponse<GameListItem[]>> =>
  get({ url: "/games" });

export const postAd = (data: CreateAdPayload): Promise<AxiosResponse> =>
  post({ url: `/games/${data.gameId}/ads`, data: data });
