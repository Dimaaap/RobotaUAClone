import * as z from "zod";

export const jobseekerSchema = z.object({
    fullName: z.string().min(2, "Некоректні дані"),
    email: z.string().email("Введіть коректний email"),
    password: z.string().min(6, "Пароль має містити мінімум 6 символів"),
})
