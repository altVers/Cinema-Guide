import { FilmsArraySchema, TFilmsArray } from "../types/TFilm";
import { baseUrl } from "./baseUrl";

export const fetchFavorites = (): Promise<TFilmsArray | void> => {
  return fetch(`${baseUrl}favorites`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((data) => FilmsArraySchema.parse(data))
    .catch((err) => console.error(err));
};
