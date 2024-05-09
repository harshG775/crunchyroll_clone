"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";
import CarouselItem,{Type_carouselProps} from "./CarouselItem";
import React from "react";

export default function Carousel({results,...props}:{results:Type_carouselProps[]}) {
    console.log(results)

	return (
		<Swiper
            {...props}
			autoplay={{ delay: 2000, disableOnInteraction: true }}
            pagination={true}
			modules={[Autoplay, Pagination, Navigation]}
            slidesOffsetBefore={0}
            slidesOffsetAfter={60}
			// breakpoints={{
			// 	0: {
			// 		slidesPerView: 1,
            //         spaceBetween: 0,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
            //         spaceBetween: 0,
			// 	},
			// 	1280: {
			// 		slidesPerView: 3,
            //         spaceBetween: 0,
			// 	},
			// }}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
            className="max-w-8xl"
            >
			{results?.map((item, index) => (
				<SwiperSlide key={index}>
					<CarouselItem {...item} key={index} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
