import Link from "next/link";
import Image from "next/image";
export default function CarouselItem(data) {
	const title =
		data.media_type === "tv"
			? data.name
				? data?.name
				: data.original_name
			: data.title
			? data?.title
			: data?.original_title;
	return (
		<Link href={`${data.media_type}/overview/${title.replace(/\s+/g, "-")}.=.${data.id}`}>
			<Image
				width={720}
				height={480}
                loading="eager"
				src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
				alt={title}
			/>
			<div className="flex justify-between">
				<p>{data.vote_average}</p>
				<div>{data.media_type}</div>
			</div>
			<h2>{title}</h2>
		</Link>
	);
}
