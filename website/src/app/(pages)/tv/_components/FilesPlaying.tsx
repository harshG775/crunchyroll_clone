"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Season } from "@/types/TvDetailsType";
import { useState } from "react";
type FilesPlayingProps = {
    title: string;
    seasons: Season[];
    episodes?: number;
};
export default function FilesPlaying({ title, seasons }: FilesPlayingProps) {
    seasons = seasons.filter((season) => season.name !== "Specials");

    const [episodes, setEpisodes] = useState(seasons[0].episode_count);
    const [currentSeason, setCurrentSeason] = useState(seasons[0].id);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    return (
        <section className="h-96 lg:h-full overflow-y-auto scrollbar-thin scrollbar-color border-b-2">
            <div className="sticky top-0 bg-background border-b-2">
                <SectionTitle
                    name="Playing"
                    titleRight={
                        <div className="flex-1 text-xs p-2">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder={`${seasons[0].name}`}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {seasons.map((season) => (
                                        <SelectItem
                                            key={season.id}
                                            value={`${season.id}`}
                                            onClick={() => {
                                                setCurrentSeason(season.id);
                                                setEpisodes(
                                                    season.episode_count
                                                );
                                            }}
                                        >
                                            {season.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    }
                />
                <h2 className="line-clamp-1 text-sm text-foreground/50 grid items-center grid-cols-[2fr_1fr] p-2 ">
                    {title}
                    <span>Episodes: {episodes}</span>
                </h2>
            </div>
            <ul>
                {Array.from({ length: episodes }, (_, i) => i + 1).map(
                    (episode) => (
                        <li key={episode} className="p-1">
                            <Button
                                onClick={() => setCurrentEpisode(episode)}
                                className={`${
                                    episode === currentEpisode
                                        ? "text-primary-foreground  bg-primary/80 hover:bg-primary/90"
                                        : "text-secondary-foreground bg-secondary/80 hover:bg-secondary/90 "
                                } cursor-pointer text-sm px-2 py-1 w-full`}
                            >
                                {episode}
                            </Button>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
}
