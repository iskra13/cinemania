import { APIInstance } from "../../API";
import {
  ShortDescriptionMovie,
  CardsDescriptionMovie,
  DocsArr,
  AllDescriptionMovie,
} from "./models";

export const fetchShortDesriptionMovies = async (name: string) => {
  return await APIInstance.get<DocsArr<ShortDescriptionMovie>>(`/movie?name=${name}`);
};

export const fetchCardsDescriptionMovies = async (page: number, genre: string) => {
  return await APIInstance.get<DocsArr<CardsDescriptionMovie>>(
    `/movie?page=${page}&type=${genre}&limit=10`
  );
};

export const fetchAllDescriptionMovie = async (id: string) => {
  return await APIInstance.get<AllDescriptionMovie>(`movie/${id}`);
};
