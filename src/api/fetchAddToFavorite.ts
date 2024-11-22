import { baseUrl } from "./baseUrl";

export const fetchAddToFavorite = (id: string) => {
  return fetch(`${baseUrl}favorites`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id}),
  })
    .catch(() => console.error("Не удалось добавить в избранное"));
};
