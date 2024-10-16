import * as z from "zod";

export const jobseekerSchema = z.object({
    full_name: z.string().min(2, "Це поле не може бути порожнім. Заповніть його, щоб продовжити"),
    email: z.string().email("Введіть коректний email"),
    password: z.string().min(6, "Пароль має містити мінімум 6 символів"),
})
