"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function CardItem_image({ backdrop_path, poster_path, title }) {
	if (backdrop_path != null) {
		return (
			<Image
				width={480}
				height={720}
				className=" rounded-lg overflow-hidden w-full"
				src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
				alt={title || "image not found"}
                loading="lazy"
			/>
		);
	}
	if (poster_path != null) {
		return (
			<Image
				width={480}
				height={720}
				className=" rounded-lg overflow-hidden w-full"
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt={title || "image not found"}
                loading="lazy"
			/>
		);
	}
	return (
		<Icon
			className="w-full h-full mx-auto max-w-[300px] max-h-[300px] p-8 text-gray-600"
			icon="icon-park-outline:movie"
		/>
	);
}
