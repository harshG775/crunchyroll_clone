import { I } from "@/components/icons/iconify/I";
import Image from "next/image";
type CardItemImageProps = {
    backdrop_path: string;
    poster_path: string;
    title: string;
}
export default function CardItem_image({ backdrop_path, poster_path, title }:CardItemImageProps) {
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
		<I
			className="w-full h-full mx-auto max-w-[300px] max-h-[300px] p-8 text-gray-600"
			icon="icon-park-outline:movie"
		/>
	);
}
