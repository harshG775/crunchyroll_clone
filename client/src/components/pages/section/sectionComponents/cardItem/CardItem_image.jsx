import { Icon } from "@iconify/react";
export default function CardItem_image({ backdrop_path, poster_path, title }) {
	if (backdrop_path != null) {
		return (
			<img
				className=" rounded-lg overflow-hidden w-full"
				src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
				alt={title}
			/>
		);
	}
	if (poster_path != null) {
		return (
			<img
				className=" aspect-video rounded-lg overflow-hidden w-full"
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt={title}
			/>
		);
	}
	return (
		<Icon
			className="w-full h-full text-[8rem] p-8 text-gray-600"
			icon="icon-park-outline:movie"
		/>
	);
}
