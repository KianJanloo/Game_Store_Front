import HeadTitle from '@/components/common/head-title/HeadTitle'
import ProductSlider from '@/components/common/sliders/ProductSlider'
import SubTitle from '@/components/common/sub-title/SubTitle'
import React from 'react'

const NewProducts = () => {
  return (
    <div className='flex flex-col gap-12 items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <HeadTitle title=' جدیدترین محصولات ' />
        <SubTitle title="جدیدترین کالاهای اضافه‌شده به فروشگاه؛ همیشه یک قدم جلوتر از بقیه باشید!" />
      </div>
      <ProductSlider />
    </div>
  )
}

export default NewProducts
