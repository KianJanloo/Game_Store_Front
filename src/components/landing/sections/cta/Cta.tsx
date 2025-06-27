/* eslint-disable */

import React from 'react'
import Mouse from '@/assets/images/Mouse.jpeg'
import Image from 'next/image'

const Cta = () => {
    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                <Image
                    src={Mouse}
                    className="w-full max-w-sm rounded-lg shadow-lg"
                    alt=" "
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-extrabold mb-4">پیشنهاد ویژه امروز 🎯</h2>
                    <p className="text-zinc-300 mb-6">
                        فقط امروز، موس گیمینگ Logitech با تخفیف ۳۰٪ قابل خرید است. فرصت رو از دست نده!
                    </p>
                    <a
                        href="/products/special"
                        className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-medium"
                    >
                        مشاهده تخفیف
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Cta
