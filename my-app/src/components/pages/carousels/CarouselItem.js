"use client";
import Link from "next/link";
export default function CarouselItem(data) {
    return (
        <Link href={`/overview`}>
            <div className="flex justify-between">
                <p>{data.vote_average}</p>
                <div>{data.media_type}</div>
            </div>
            <h2>{data.title}</h2>
        </Link>
    )
}