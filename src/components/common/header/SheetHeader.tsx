'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader as ShadCnSheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BiMenu } from 'react-icons/bi'
import Logo from '../logo/Logo'
import { routes } from '@/utils/services/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SheetHeader = () => {

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger> <BiMenu className='text-3xl cursor-pointer' /> </SheetTrigger>
      <SheetContent className='pt-[50px]'>
        <ShadCnSheetHeader className='flex flex-col gap-8'>
          <SheetTitle> <Logo /> </SheetTitle>
          <div className='flex flex-col gap-4'>
            {routes.map(({ title, href, icon: Icon }, index) => (
              <Link key={index} href={href} className={` ${pathname === href ? "bg-primary" : "hover:bg-foreground/10"} flex gap-4 px-4 py-2 cursor-pointer rounded-2xl`}>
                <Icon size={20} />
                <span> {title} </span>
              </Link>
            ))}
          </div>
        </ShadCnSheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SheetHeader
