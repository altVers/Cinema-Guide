import { z } from "zod";

export const FilmSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.number().nullable(),
  releaseDate: z.string().nullable(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number(),
  budget: z.string().nullable(),
  revenue: z.string().nullable(),
  homepage: z.string(),
  status: z.string(),
  posterUrl: z.string().nullable(),
  backdropUrl: z.string().nullable(),
  trailerUrl: z.string(),
  trailerYouTubeId: z.string(),
  tmdbRating: z.number(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.string().nullable(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
});

export const FilmsArraySchema = z.array(FilmSchema).nullable()

export type TFilm = z.infer<typeof FilmSchema>
export type TFilmsArray = z.infer<typeof FilmsArraySchema>

