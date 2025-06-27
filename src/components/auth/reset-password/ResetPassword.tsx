'use client'
import React from 'react'
import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import ErrorText from '@/components/common/error/ErrorText'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '@/components/common/logo/Logo'
import { BlurFade } from '@/components/ui/blur-fade'
import { resetValidation } from '@/utils/validations/reset-validation/reset-validation'
import LoginWithOtherWay from '../login-another-way/LoginWithOtherWay'
import Link from 'next/link'

const ResetPassword = () => {

    const {
        formState: { errors },
        register,
        handleSubmit
    } = useForm({
        resolver: zodResolver(resetValidation)
    })

    const onSubmit = () => {

    }

    return (
        <BlurFade>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" md:w-[500px] max-md:mx-[20px] flex p-4 flex-col gap-8 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/10 rounded-2xl border border-secondary/20 mx-auto "
            >
                <div className='w-full flex justify-between gap-4 flex-wrap'>
                    <h2 className='text-xl'> تغییر رمز عبور </h2>
                    <Logo />
                </div>
                <div className='flex flex-col items-center gap-4 w-full'>
                    <div className='w-full gap-4 flex max-md:flex-col'>
                        <div className='w-1/2 max-md:w-full flex flex-col gap-2'>
                            <label className='text-sm' htmlFor='newPassword' > رمز عبور جدید: </label>
                            <input id='newPassword' {...register("newPassword")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' نام خود را وارد کنید ' />
                            <ErrorText name='newPassword' errors={errors} />
                        </div>
                        <div className='w-1/2 max-md:w-full flex flex-col gap-2'>
                            <label className='text-sm' htmlFor='confirmPassword' > تکرار رمز عبور: </label>
                            <input id='confirmPassword' {...register("confirmPassword")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' نام خانوداگی خود را وارد کنید ' />
                            <ErrorText name='confirmPassword' errors={errors} />
                        </div>
                    </div>
                    <div className='w-full flex-wrap gap-4 flex items-center justify-between'>
                        <Link href="/auth/login" className='text-sm text-foreground/80 flex gap-2' > برگشت به <h2 className='underline'> ورود به حساب </h2> </Link>
                        <LoginWithOtherWay />
                    </div>
                    <div className='w-full max-md:flex-col flex mt-[20px] gap-4'>
                        <CommonButton type='submit' className='w-full bg-gold text-gold-foreground justify-center' title='تایید رمز عبور' icon={<ChevronLeft size={20} />} />
                    </div>
                </div>
            </form>
        </BlurFade>
    )
}

export default ResetPassword
