import { FilmsArraySchema, TFilmsArray } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchTopTen = (): Promise<TFilmsArray> => {
  return fetch(`${baseUrl}movie/top10`)
    .then((data) => data.json())
    .then((data) => FilmsArraySchema.parse(data));
};
