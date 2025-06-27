import React from 'react'

const WhyUs = () => {
    return (
        <div className="bg-secondary text-secondary-foreground py-8 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 text-center">
                <div>
                    <h3 className="text-xl font-bold mb-1">ارسال رایگان</h3>
                    <p className="text-sub-title text-sm">برای سفارش‌های بالای ۵۰۰ هزار تومان</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">ضمانت اصالت کالا</h3>
                    <p className="text-sub-title text-sm">همراه با گارانتی ۲ ساله معتبر</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">پشتیبانی تخصصی</h3>
                    <p className="text-sub-title text-sm">قبل و بعد از خرید در کنار شما هستیم</p>
                </div>
            </div>
        </div>

    )
}

export default WhyUs
