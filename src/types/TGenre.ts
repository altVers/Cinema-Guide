import { z } from "zod";

export const GenresSchema = z.array(z.string())
export type TGenres = z.infer<typeof GenresSchema>
