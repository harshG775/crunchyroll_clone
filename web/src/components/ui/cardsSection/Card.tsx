import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type CardType = {
    id: number;
    backdrop_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    media_type: "movie" | "tv" | "person";
};
type CardPropsType = {
    card: CardType;
    mediaType?: string;
};
export default function Card({ card, mediaType }: CardPropsType) {
    const {
        id,
        backdrop_path,
        title,
        name,
        vote_average,
        release_date,
        first_air_date,
        media_type,
    } = card;
    const Title = title ? title : name;
    const aired = release_date ? release_date : first_air_date;
    return (
        <li key={id} className="grid justify-center">
            <Link
                href={`watch?media_type=${mediaType?mediaType:media_type}&id=${id}&title=${Title?.replace(/ /g, "+")}`}
                className="mb-6 grid gap-2 grid-rows-[auto_1fr]"
            >
                <Image
                    width={320}
                    height={240}
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    alt={Title + " poster"}
                    className="rounded-md w-80 "
                />
                <div className="px-2">
                    <h3 className=" font-semibold line-clamp-1 text-text">
                        {Title}
                    </h3>

                    <div className="flex justify-between text-xs font-medium text-text/80">
                        <span>
                            {aired?.slice(0, 4)}{" "}
                            {mediaType ? (
                                <span className="text-text">{mediaType}</span>
                            ) : (
                                <span>{media_type}</span>
                            )}
                        </span>
                        <span className="flex gap-2 items-center">
                            <Star className="w-4 h-4" />
                            {vote_average.toFixed(1)}/10
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
