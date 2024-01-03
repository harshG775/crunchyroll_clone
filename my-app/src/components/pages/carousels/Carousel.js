"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import CarouselItem from "./CarouselItem";

export default function Carousel(props) {
    const {data} = props

	return (
			<Swiper
				autoplay={{ delay: 2500, disableOnInteraction: false, }}
                modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
                >
                    {data?.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <CarouselItem {...item}/>
                        </SwiperSlide>
                    ))}
			</Swiper>
	);
}