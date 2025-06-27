'use client'
import React from 'react'
import { routes } from '@/utils/services/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className='flex gap-4 max-md:hidden'>
        {routes.map(({ title, href }, index) => (
            <Link className={` ${pathname === href ? "text-primary" : "hover:text-hover-foreground"} `} href={href} key={index}> {title} </Link>
        ))}
      </div>
  )
}

export default Navbar
