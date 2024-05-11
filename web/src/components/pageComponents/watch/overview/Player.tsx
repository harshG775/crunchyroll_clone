"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Iframe_movie, Iframe_tv } from "./Iframe";

type DataType = {
    backdrop_path: string;
    id: number;
    title?: string;
    name?: string;
};
type PlayerPropsType = {
    data: DataType;
    media_type: "movie" | "tv";
};

function PlayerMovie({ data }: any) {
    const { id, title, releaseDate } = data;
    return (
        <div>
            {getIsReleasedMovie(releaseDate) ? (
                <>{/*<Iframe_movie domain="pro" title={title} id={id} /> */}</>
            ) : (
                "Not released"
            )}
        </div>
    );
}
function PlayerTv({ data }: any) {
    const { id, title, seasons, backdrop_path, first_air_date, in_production } =
        data;
    const [currentSeason, setCurrentSeason] = useState(1);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    const epsArray = Array.from(
        { length: seasons[currentSeason - 1].episode_count },
        (_, i) => i + 1
    );
    return (
        <div className=" xl:max-w-8xl transition-[max-width] duration-300 mx-auto grid xl:grid-cols-[1fr_320px] gap-2">
            {data.first_air_date ? (
                data.in_production ? (
                    <div>Map released episodes only</div>
                ) : (
                    <div>
                        <div className="flex flex-col">
                            <label htmlFor="season">Seasons</label>
                            <select
                                id="season"
                                onChange={(e) =>
                                    setCurrentSeason(Number(e.target.value))
                                }
                            >
                                {seasons.map(
                                    (season: any) =>
                                        season.name !== "Specials" && (
                                            <option
                                                value={season.season_number}
                                                key={season.season_number}
                                            >
                                                {season.season_number}
                                            </option>
                                        )
                                )}
                            </select>
                        </div>
                        <div>
                            <h1>Episodes</h1>
                            <ul className="xl:mt-6 scrollbar-thin scrollbar-color max-h-96 xl:max-h-[855px] overflow-auto grid grid-flow-row">
                                {epsArray.map((episode: any) => {
                                    return (
                                        <li
                                            key={episode}
                                            onClick={() =>
                                                setCurrentEpisode(episode)
                                            }
                                        >
                                            {episode}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )
            ) : (
                <div>Not released</div>
            )}

            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
                }}
                className="bg-no-repeat"
            >
                {/* <Iframe_tv
                    domain="pro"
                    title={title}
                    id={id}
                    season={currentSeason}
                    episode={currentEpisode}
                /> */}
            </div>
        </div>
    );
}

export default function Player({ data, media_type }: PlayerPropsType) {
    const { backdrop_path, id, title, name } = data;
    const Title = title ? title : name;
    console.log(data);
    return (
        <>
            <div>
                {media_type === "movie" ? (
                    <PlayerMovie data={data} />
                ) : (
                    <PlayerTv data={data} />
                )}
            </div>
        </>
    );
}

//
function getIsReleasedMovie(releaseDate: string) {
    // Convert release date string to a Date object
    const releaseDateTime = new Date(releaseDate);

    // Get the current date
    const currentDate = new Date();

    // Compare the release date with the current date
    if (currentDate >= releaseDateTime) {
        return true; // Release date has passed
    } else {
        return false; // Release date is in the future
    }
}
