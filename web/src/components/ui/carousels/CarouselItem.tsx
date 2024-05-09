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
	const Title = title ? title : name;
	return (
        <>
            <div className="z-20

            bg-gradient-to-b from-background/0 via-slate-50/0 to-background/50
            grid lg:grid-cols-1 sm:grid-cols-[2fr,1fr] grid-cols-1 lg:items-center sm:items-end items-end 
            ">
                <div className="p-4 space-y-2">
                    <h2 className="font-semibold text-2xl sm:text-3xl ">{Title}</h2>
                    <div className="flex justify-between">
                        <p>{vote_average}</p>
                        <div>{media_type}</div>
                    </div>
                    <p className="lg:line-clamp-4 sm:line-clamp-3 line-clamp-1 font-light text-xs">
                        {overview}
                    </p>
                    <div className="flex pb-4">
                        <Link 
                        href={`watch?media_type=${media_type}&id=${id}&title=${Title?.replace(/ /g, "+")}`}
                        className="rounded-md px-8 py-2 bg-primary">
                            play Now
                        </Link>
                    </div>
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
                        alt={Title}
                    />
                </Suspense>
            </div>
        </>
	);
}
