import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <Link href={"/auth/login"} className='bg-primary px-4 py-2 rounded-2xl cursor-pointer text-sm'>
        <span> ورود یا ثبت نام </span>
    </Link>
  )
}

export default LoginButton
