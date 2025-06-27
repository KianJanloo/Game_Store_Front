/* eslint-disable */

import Link from "next/link"
import Logo from "../logo/Logo"

const Footer = () => {
  return (
    <div className="bg-secondary rounded-2xl mx-4 my-4 text-sub-title py-10 border-t border-secondary z-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm leading-relaxed">
            فروشگاه تخصصی تجهیزات گیمینگ با بهترین قیمت و تضمین اصالت کالا
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold mb-1">لینک‌های مفید</h3>
          <Link href="/" className="text-sm hover:text-hover-foreground transition-colors">صفحه اصلی</Link>
          <Link href="/products" className="text-sm hover:text-hover-foreground transition-colors">محصولات</Link>
          <Link href="/about" className="text-sm hover:text-hover-foreground transition-colors">درباره ما</Link>
          <Link href="/contact" className="text-sm hover:text-hover-foreground transition-colors">تماس با ما</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-foreground font-semibold mb-1">پشتیبانی</h3>
          <Link href="/faq" className="text-sm hover:text-hover-foreground transition-colors">سؤالات متداول</Link>
          <Link href="/support" className="text-sm hover:text-hover-foreground transition-colors">مرکز پشتیبانی</Link>
          <Link href="/terms" className="text-sm hover:text-hover-foreground transition-colors">قوانین و مقررات</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-foreground font-semibold mb-1">نمادها</h3>
          <div className="flex flex-wrap gap-2">
            <img src=" " alt=" " className="size-16 rounded-md bg-background" />
            <img src=" " alt=" " className="size-16 rounded-md bg-background" />
            <img src=" " alt=" " className="size-16 rounded-md bg-background" />
          </div>
          <p className="text-xs text-sub-title mt-2">با خیال راحت خرید کنید</p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-sub-title border-t border-secondary pt-6">
        © {new Date().getFullYear()} GameDon. تمامی حقوق محفوظ است.
      </div>
    </div>
  )
}

export default Footer
