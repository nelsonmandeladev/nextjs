import { z, string, number, object } from "zod"

export const UserLoginSchema = object({
    email: string({ required_error: "field_required" })
        .min(1, "field_required")
        .email("Invalid email"),
    password: string({ required_error: "field_required" })
        .min(1, "field_required"),
});

export type UserLoginType = z.infer<typeof UserLoginSchema>