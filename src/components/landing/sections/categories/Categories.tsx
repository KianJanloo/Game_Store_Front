import React from 'react'

const Categories = () => {
    return (
        <div className="py-8 flex flex-col gap-4 w-full items-center">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                    { title: "موس گیمینگ", icon: "🖱️" },
                    { title: "کیبورد مکانیکی", icon: "⌨️" },
                    { title: "هدست و صدا", icon: "🎧" },
                    { title: "صندلی گیمینگ", icon: "💺" },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="bg-secondary rounded-xl py-6 text-center hover:bg-secondary/80 px-8 transition"
                    >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-lg font-semibold">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Categories
