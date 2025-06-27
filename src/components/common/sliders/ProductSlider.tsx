import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FC } from "react"
import ProductCard from "../cards/ProductCard"

const ProductSlider: FC = () => {
    return (
        <Carousel className="w-[90%] max-lg:w-[80%] max-md:w-[75%] mx-auto" opts={{ align: "start", direction: "rtl", loop: true }} >
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="md:pl-8 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <ProductCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}

export default ProductSlider