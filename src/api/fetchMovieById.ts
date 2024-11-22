import { FilmSchema, TFilm } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchMovieById = (id: number): Promise<TFilm> => {
  return fetch(`${baseUrl}movie/${id}`)
    .then((data) => data.json())
    .then((data) => FilmSchema.parse(data));
};
