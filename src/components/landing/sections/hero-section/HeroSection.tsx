import Link from "next/link"
import React from "react"
import Banner from '@/assets/images/Banner.jpeg'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative bg-black text-white h-screen flex items-center justify-center">
            <div className="absolute inset-0">
                <Image
                    src={Banner}
                    alt=" "
                    className="w-full h-full object-cover opacity-30"
                />

            </div>
            <div className="z-10 text-center max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl leading-[80px] font-extrabold mb-4">
                    تجربه‌ای متفاوت از خرید گیمینگ
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    لوازم حرفه‌ای با بهترین قیمت و ارسال سریع برای گیمرهای واقعی 🎮
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="/products"
                        className="bg-primary hover:bg-primary/80 transition-all duration-300 cursor-pointe cursor-pointer text-foreground px-6 py-3 rounded-full text-lg max-md:text-base font-semibold"
                    >
                        مشاهده محصولات
                    </Link>
                    <Link
                        href="/#offers"
                        className="border border-foreground text-foreground px-6 py-3 rounded-full text-lg max-md:text-base"
                    >
                        پیشنهاد ویژه امروز
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection
