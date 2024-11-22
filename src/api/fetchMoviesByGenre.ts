import { FilmsArraySchema, TFilmsArray } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchMoviesByGenre = async (genre: string, page: number = 1): Promise<TFilmsArray> => {
  return await fetch(`${baseUrl}movie?count=15&page=${page}&genre=${genre}`)
    .then((data) => data.json())
    .then((data) => FilmsArraySchema.parse(data));
};
