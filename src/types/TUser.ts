import { z } from "zod";

export const RegisterUserSchema = z.object({
    email: z.string().email("Неверный формат почты"),
    password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
    name: z.string(),
    surname: z.string(),
})

export const LoginUserSchema = z.object({
    email: z.string().email("Неверный формат почты"),
    password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
})

export type TRegisterUser = z.infer<typeof RegisterUserSchema>
export type TLoginUser = z.infer<typeof RegisterUserSchema>