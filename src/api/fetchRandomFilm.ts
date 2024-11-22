import { FilmSchema, TFilm } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchRandomFilm = (): Promise<TFilm> => {
  return fetch(`${baseUrl}movie/random`)
    .then((data) => data.json())
    .then((data) => FilmSchema.parse(data));
};
