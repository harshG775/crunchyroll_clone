"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { TvDetailsType } from "@/types/TvDetailsType";
import { formatDate, formatNumber } from "@/utils/Formatter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type OverviewType = {
    className?: string;
    data: TvDetailsType;
};
export default function Overview({ className, data }: OverviewType) {
    const [collapsed, setCollapsed] = useState(true);
    const {
        name,
        poster_path,
        episode_run_time,
        genres,
        first_air_date,
        origin_country,
        status,
        production_companies,
        original_language,
        vote_average,
        vote_count,
    } = data;
    return (
        <section className={cn("", className)}>
            <SectionTitle name={name} className="p-2" />
            <div className="grid sm:grid-cols-[1fr_3fr] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">
                <div className="px-2 ">
                    <Image
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        width={200}
                        height={300}
                        alt={name}
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <h1 className="italic text-foreground/60 font-medium text-xl">
                        {data.original_name}
                    </h1>
                    <div>
                        <p
                            className={`${
                                collapsed ? "line-clamp-2 " : ""
                            } text-foreground/60 text-sm font-light`}
                        >
                            {data.overview}
                        </p>
                        <button
                            className="text-xs text-foreground/80 cursor-pointer hover:text-primary transition-colors"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? "[Show]" : "[Hide]"}
                        </button>
                    </div>
                    <ul
                        className="
                    mt-2 space-y-2
                    text-foreground/60 text-sm font-light
                    [&>li]:flex [&>li]:gap-2 [&>li>span]:text-foreground/90
                    [&>li]:flex-wrap [&>li]:leading-3
                    "
                    >
                        <li>
                            <div>Status:</div>
                            <span>{status}</span>
                        </li>
                        <li>
                            <div>Country:</div>
                            <span>
                                {origin_country.map((country) => country)}
                            </span>
                        </li>
                        <li>
                            <div>Duration:</div>
                            <span>{episode_run_time} min</span>
                        </li>
                        <li>
                            <div>TMDB Rating:</div>
                            <span>
                                {vote_average}/10
                                <span className="text-foreground/40">
                                    {" "}
                                    by {formatNumber(vote_count)}{" "}
                                </span>
                            </span>
                        </li>
                        <li>
                            <div>Language:</div>
                            <span className="uppercase">
                                {original_language}
                            </span>
                        </li>
                        <li>
                            <div>Date aired:</div>
                            <span>{formatDate(first_air_date, "en-IN")}</span>
                        </li>
                        <li className="flex flex-wrap leading-3">
                            <div>Genre:</div>
                            <span className="flex gap-2 flex-wrap">
                                {genres.map((genre) => (
                                    <Link
                                        key={genre.id}
                                        href={`#filter?genre/${genre.id}`}
                                        className="text-primary/80 hover:text-primary transition-colors"
                                    >
                                        {genre.name},
                                    </Link>
                                ))}
                            </span>
                        </li>
                        <li>
                            <div className="text-nowrap">
                                Production Companies:
                            </div>
                            {production_companies.map((company) => (
                                <span>{company.name}, </span>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
