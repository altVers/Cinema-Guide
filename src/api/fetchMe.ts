import { ProfileShema, TProfile } from "../types/TProfile";
import { baseUrl } from "./baseUrl";

export const fetchMe = async (): Promise<TProfile> => {
  return await fetch(`${baseUrl}profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json()).then((data) => ProfileShema.parse(data))
};
