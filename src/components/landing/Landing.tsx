import React from 'react'
import HeroSection from './sections/hero-section/HeroSection'
import Categories from './sections/categories/Categories'
import WhyUs from './sections/why-us/WhyUs'
import Cta from './sections/cta/Cta'
import NewProducts from './sections/new-products/NewProducts'
import Offers from './sections/offers/Offers'

const Landing = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='absolute top-0 w-full'>
        <HeroSection />
      </div>
      <div className='w-full flex flex-col gap-32 mt-[700px]'>
        <Categories />
        <NewProducts />
        <Offers />
        <WhyUs />
        <Cta />
      </div>
    </div>
  )
}

export default Landing
