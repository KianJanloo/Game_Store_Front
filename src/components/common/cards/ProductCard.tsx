/* eslint-disable */

import { splitNumber } from '@/utils/helper/functions/split-number'
import { Book } from 'lucide-react'
import React from 'react'
import InfoText from '../infoText/InfoText'
import { PiBrandy } from 'react-icons/pi'
import { Button } from '@/components/ui/button'

const ProductCard = () => {

  const discount = 20;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-secondary/60 w-full h-[200px] p-4 rounded-2xl overflow-hidden">
        <img
          src={" "}
          alt={" "}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex w-full justify-between flex-wrap gap-2">
          <h2 className="text-lg font-semibold"> موس گیمینگ </h2>
          {discount > 0 && <div className='px-4 text-sm flex items-center justify-center py-0.5 bg-danger text-danger-foreground rounded-2xl'> {discount}% </div>}
        </div>
        <span className="text-foreground/60 text-sm w-full line-clamp-2">
         یکی از بهترین موس های جهان که فقط در فروشگله مل موجود می باشد. الکی میخوام سرت کلاه بزارم ها. ازم بخر
        </span>
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        <InfoText title=' دسته بندی ' value=' موس ' icon={<Book size={14} />} />
        <InfoText title=' برند ' value=' ENZO ' icon={<PiBrandy size={14} />} />
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="bg-foreground text-background text-sm rounded-2xl px-4 py-0.5">
          موس
        </div>
        <div className="bg-foreground text-background text-sm rounded-2xl px-4 py-0.5">
          گیمینگ
        </div>
      </div>

      <div className='w-full flex justify-between items-center'>
        <span className="text-base text-primary font-bold"> {splitNumber(1200000, { currency: "IRT", locale: "fa-IR" })} </span>
        <Button className='bg-primary text-primary-foreground px-4 py-2 rounded-2xl cursor-pointer'> مشاهده </Button>
      </div>
    </div>
  )
}

export default ProductCard
