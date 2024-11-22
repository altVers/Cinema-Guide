import { TRegisterUser } from "../types/TUser"
import { baseUrl } from "./baseUrl"

export const loginUser = (data: TRegisterUser) => {
    return fetch(`${baseUrl}auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    ).catch((error) => console.error(error))
}
