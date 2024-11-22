import { TRegisterUser } from "../types/TUser"
import { baseUrl } from "./baseUrl"

export const registerUser = (data: TRegisterUser) => {
    return fetch(`${baseUrl}user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    ).catch((error) => console.error(error))
}
