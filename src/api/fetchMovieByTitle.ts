import { FilmsArraySchema, TFilmsArray } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchMovieByTitle = (title: string): Promise<TFilmsArray> => {
  return fetch(`${baseUrl}movie?count=5&title=${title}`)
    .then((data) => data.json())
    .then((data) => FilmsArraySchema.parse(data));
};
