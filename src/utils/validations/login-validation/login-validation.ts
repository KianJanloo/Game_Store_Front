import { z } from "zod";

export const loginValidation = z.object({
    email: z.string({ required_error: " لطفا ایمیل خود را وارد کنید " }).min(1, " لطفا ایمیل خود را وارد کنید ").email(" ایمیل نا معتبر است "),
    password: z.string({ required_error: " لطفا رمز عبور خود را وارد کنید " }).min(1, " لطفا رمز عبور خود را وارد کنید ")
})