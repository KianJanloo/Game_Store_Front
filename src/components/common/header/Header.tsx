import React from 'react'
import LoginButton from './LoginButton'
import Logo from '../logo/Logo'
import Navbar from './Navbar'
import SheetHeader from './SheetHeader'

const Header = () => {
  return (
    <div className='w-full px-4 py-4 flex justify-between items-center z-10'>
      <div className='max-md:hidden'>
        <Logo />
      </div>
      <div className='md:hidden'>
        <SheetHeader />
      </div>
      <Navbar />
      <LoginButton />
    </div>
  )
}

export default Header
