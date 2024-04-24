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
    overview: string;
}
export default function CarouselItem(props:Type_carouselProps) {
    const { backdrop_path, id, media_type, name, original_name, original_title, title, vote_average,overview } = props;
	const titleT = media_type === "tv" ? name ? name : original_name : title ? title : original_title;
	return (
        <>
            <div className="z-20
            lg:bg-gradient-to-r lg:from-neutral-900/0  lg:to-neutral-900/0
            sm:bg-gradient-to-r sm:from-neutral-950  sm:to-neutral-950/0
            bg-gradient-to-t from-neutral-950  to-neutral-950/0
            grid lg:grid-cols-1 sm:grid-cols-[2fr,1fr] grid-cols-1 sm:items-center items-end 
            ">
                <div className="p-4 space-y-2">
                    <h2 className="font-semibold text-2xl sm:text-3xl ">{titleT}</h2>
                    <div className="flex justify-between">
                        <p>{vote_average}</p>
                        <div>{media_type}</div>
                    </div>
                    <p className="lg:line-clamp-4 sm:line-clamp-3 line-clamp-1 font-light text-xs">
                        {overview}
                    </p>
                    <Link href={`/${media_type}/overview?id=${id}&title=${titleT}`}>
                        play Now
                    </Link>
                </div>
            </div>
            <div>
                <Suspense fallback={<div>Loading Image...</div>}>
                    <Image
                        className="
                        lg:static absolute inset-0 z-10
                        lg:rounded-xl w-full"
                        width={1080}
                        height={720}
                        loading="eager"
                        src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
                        alt={titleT}
                    />
                </Suspense>
            </div>
        </>
	);
}
