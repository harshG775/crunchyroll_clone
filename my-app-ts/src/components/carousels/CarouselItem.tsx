import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
export type Type_carouselProps = {
    backdrop_path: string;
    id: number;
    media_type: string;
    name: string;
    original_name: string;
    original_title: string;
    title: string;
    vote_average: number;
}
export default function CarouselItem(props:Type_carouselProps) {
    const { backdrop_path, id, media_type, name, original_name, original_title, title, vote_average } = props;
	const titleT = media_type === "tv" ? name ? name : original_name : title ? title : original_title;
	return (
		<Link href={`/${media_type}/overview?id=${id}&title=${titleT}`}>
			<Suspense fallback={<div>Loading Image...</div>}>
                <Image
                    width={720}
                    height={480}
                    loading="eager"
                    src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
                    alt={titleT}
                />
            </Suspense>
			<div className="flex justify-between">
				<p>{vote_average}</p>
				<div>{media_type}</div>
			</div>
			<h2>{titleT}</h2>
		</Link>
	);
}
