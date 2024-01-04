"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import CarouselItem from "./CarouselItem";

export default function Carousel(props) {
	const { data } = props;

	return (
		<Swiper
			autoplay={{ delay: 2000, disableOnInteraction: true }}
			modules={[Autoplay, Pagination, Navigation]}
			spaceBetween={50}
			slidesPerView={3}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1280: {
					slidesPerView: 5,
				},
			}}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}>
			{data?.map((item, index) => (
				<SwiperSlide key={index}>
					<CarouselItem {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
