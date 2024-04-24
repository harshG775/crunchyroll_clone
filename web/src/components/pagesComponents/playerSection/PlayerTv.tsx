import { useState } from "react";
import Iframe from "./Iframe";
import Image from "next/image";
export type Type_props = {
    url: string;
    title: string;
    id: string;
    mediaData: any;
};

export default function PlayerTv({
    url,
    title,
    id,
    mediaData,
}: Type_props) {
    const [currentSeason, setCurrentSeason] = useState(0);
    const [episodes, setEpisodes] = useState<number[]>([]);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    console.log(mediaData.seasons);
    return (
        <div>
            {currentSeason <= 0 ? <div>select Season</div>
                : <Iframe  media_src={`${url}/tv/${id}/${currentSeason}-${currentEpisode}`} title={title} id={id+currentEpisode+currentEpisode} />
            }
            <div>current Season:{currentSeason}</div>
            <div className="max-h-96 overflow-y-auto">
                {mediaData.seasons.map((item: any) => (
                    <div
                        onClick={() => {
                            setCurrentSeason(item.season_number);
                            setEpisodes(
                                Array.from(
                                    { length: item.episode_count },
                                    (_, i) => i + 1
                                )
                            );
                            setCurrentEpisode(1);
                        }}
                        key={item.id}
                        className={`${item.season_number === currentSeason ? "bg-blue-600 text-white" : "text-blue-600"} flex gap-2 cursor-pointer hover:text-blue-600`}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.name}
                            width={96}
                            height={128}
                        />
                        <span className="text-blue-600">
                            #{item.season_number}{" "}
                        </span>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="max-h-96 overflow-y-auto">
                {episodes.length === 0 && <div>no episodes</div>}
                {episodes.map(
                    (episode) => (
                        <div
                            onClick={() => setCurrentEpisode(episode)}
                            key={`${currentSeason}-${episode}`}
                            className={` flex gap-2 cursor-pointer ${currentEpisode === episode ? "bg-blue-600 text-white" : "text-blue-600"}`}
                        >
                            <span>
                                {currentSeason}x{episode}
                            </span>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
