import { irishGrover } from '@/utils/helper/fonts/CustomFont'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className={` ${irishGrover.className} text-2xl text-primary`}> Game Don </Link>
  )
}

export default Logo
