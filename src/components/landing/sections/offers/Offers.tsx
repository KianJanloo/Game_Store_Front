import HeadTitle from '@/components/common/head-title/HeadTitle'
import ProductSlider from '@/components/common/sliders/ProductSlider'
import SubTitle from '@/components/common/sub-title/SubTitle'
import React from 'react'

const Offers = () => {
    return (
        <div className='flex flex-col gap-12 items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <HeadTitle title=' تخفیفات ویژه ' />
                <SubTitle title="فرصت‌های استثنایی با قیمت‌های باورنکردنی؛ فقط برای مدت محدود!" />
            </div>
            <ProductSlider />
        </div>
    )
}

export default Offers
