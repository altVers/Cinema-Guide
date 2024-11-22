import { GenresSchema, TGenres } from "../types/TGenre"
import { baseUrl } from "./baseUrl"

export const fetchGenres = (): Promise<TGenres> => {
    return fetch(`${baseUrl}movie/genres`).then((data) => data.json()).then((data) => GenresSchema.parse(data))
}