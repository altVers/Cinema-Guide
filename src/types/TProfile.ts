import { z } from "zod";

export const ProfileShema = z.object({
    favorites: z.array(z.string()).nullable(),
    surname: z.string(),
    name: z.string(),
    email: z.string().email()
})

export type TProfile = z.infer<typeof ProfileShema>