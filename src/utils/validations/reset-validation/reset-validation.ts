import { z } from "zod";

export const resetValidation = z.object({
    newPassword: z.string({ required_error: " لطفا رمز عبور خود را وارد کنید " }).min(1, " لطفا رمز عبور خود را وارد کنید "),
    confirmPassword: z.string({ required_error: " لطفا رمز عبور خود را وارد کنید " }).min(1, " لطفا رمز عبور خود را وارد کنید ")
})