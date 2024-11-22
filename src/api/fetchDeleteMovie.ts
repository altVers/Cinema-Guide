import { baseUrl } from "./baseUrl";

export const fetchDeleteMovie = (id: number) => {
  return fetch(`${baseUrl}favorites/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
