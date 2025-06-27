'use client'
import React from 'react'
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import { usePathname } from 'next/navigation';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const pathname = usePathname();

  return (
    <div className='w-screen overflow-x-hidden flex flex-col gap-8'>
      {!pathname.includes("auth") && <Header />}
      <div>
        {children}
      </div>
      {!pathname.includes("auth") && <Footer />}
    </div>
  )
}

export default Layout
