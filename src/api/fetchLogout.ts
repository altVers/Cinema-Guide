import { baseUrl } from "./baseUrl";

export const fetchLogout = () => {
  return fetch(`${baseUrl}auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.error(err));
};
