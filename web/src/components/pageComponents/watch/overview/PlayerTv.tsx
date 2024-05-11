import React, { useState } from "react";
import { Iframe_tv } from "./Iframe";
import { tvDetailsType } from "@/types/DetailsType";

enum tvStatus {
    InProduction = "In Production", //X
    ReturningSeries = "Returning Series", //o
    Ended = "Ended", //o

    Planned = "Planned", //X
    Pilot = "Pilot", //o
    Canceled = "Canceled", //o
}

function WillRelease() {
    return <div>Show is In Production and will be released</div>;
}
function ReturningSeries() {
    return <div> map only aired the episode</div>;
}

export default function PlayerTv({ data }: any) {
    const { seasons, id, name ,next_episode_to_air} = data as tvDetailsType;

    const [currentSeason, setCurrentSeason] = useState(1);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    const { status } = data;

    const episodes = Array.from(
        { length: seasons[currentSeason - 1].episode_count },
        (_, i) => i + 1
    );
    // const airingEP = status===tvStatus.InProduction? 
    return (
        <div>
            {status === tvStatus.InProduction ||
                (status === tvStatus.Planned && <WillRelease />)}
            {status === tvStatus.ReturningSeries && (
                <div className="grid lg:grid-cols-[1fr_320px]">
                    <div>
                        <Iframe_tv
                            domain="pro"
                            title={name}
                            id={id}
                            season={currentSeason}
                            episode={currentEpisode}
                        />
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="seasons">Seasons</label>
                            <select
                                className="w-full text-center ring-0 ring-primary/40 appearance-none"
                                id="seasons"
                                onChange={(e) =>
                                    setCurrentSeason(Number(e.target.value))
                                }
                                value={currentSeason}
                            >
                                {seasons.map(
                                    (season) =>
                                        season.name !== "Specials" && (
                                            <option
                                                key={season.season_number}
                                                value={season.season_number}
                                            >
                                                <span className="bg-red-600">
                                                    {season.name}
                                                </span>
                                            </option>
                                        )
                                )}
                            </select>
                        </div>
                        <ul className="grid p-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-color">
                            {episodes.slice(0, next_episode_to_air.episode_number-1).map((ep) => (
                                <>
                                    <li
                                        key={ep}
                                        onClick={() => setCurrentEpisode(ep)}
                                        role="button"
                                        className={` p-1 ${
                                            currentEpisode === ep
                                                ? "bg-primary/80"
                                                : ep % 2 === 0
                                                ? "bg-primary/20"
                                                : "bg-primary/10"
                                        } hover:bg-primary/50 focus:bg-primary/50`}
                                    >
                                        
                                        episode:{ep}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {status === tvStatus.Ended && (
                <div className="grid lg:grid-cols-[1fr_320px]">
                    <div>
                        <Iframe_tv
                            domain="pro"
                            title={name}
                            id={id}
                            season={currentSeason}
                            episode={currentEpisode}
                        />
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="seasons">Seasons</label>
                            <select
                                className="w-full text-center ring-0 ring-primary/40 appearance-none"
                                id="seasons"
                                onChange={(e) =>
                                    setCurrentSeason(Number(e.target.value))
                                }
                                value={currentSeason}
                            >
                                {seasons.map(
                                    (season) =>
                                        season.name !== "Specials" && (
                                            <option
                                                key={season.season_number}
                                                value={season.season_number}
                                            >
                                                <span className="bg-red-600">
                                                    {season.name}
                                                </span>
                                            </option>
                                        )
                                )}
                            </select>
                        </div>
                        <ul className="grid p-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-color">
                            {episodes.map((ep) => (
                                <li
                                    key={ep}
                                    onClick={() => setCurrentEpisode(ep)}
                                    role="button"
                                    className={` p-1 ${
                                        currentEpisode === ep
                                            ? "bg-primary/80"
                                            : ep % 2 === 0
                                            ? "bg-primary/20"
                                            : "bg-primary/10"
                                    } hover:bg-primary/50 focus:bg-primary/50`}
                                >
                                    episode:{ep}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
