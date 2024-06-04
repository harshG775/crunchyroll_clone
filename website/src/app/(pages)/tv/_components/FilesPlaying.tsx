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
import { useState } from "react";
type FilesPlayingProps = {
    title: string;
    seasons: number;
    episodes: number;
};
export default function FilesPlaying({
    title,
    seasons,
    episodes,
}: FilesPlayingProps) {
    const [currentSeason, setCurrentSeason] = useState(1);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    return (
        <section>
            <SectionTitle
                name="Playing"
                titleRight={
                    <div className="flex ">
                        <Select>
                            <SelectTrigger className="cursor-pointer text-sm text-primary-foreground bg-primary/80 hover:bg-primary/90 px-2 py-1">
                                <SelectValue
                                    placeholder={`Season-${currentSeason}`}
                                />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from(
                                    { length: seasons },
                                    (_, i) => i + 1
                                ).map((season) => (
                                    <SelectItem
                                        key={season}
                                        value={`${season}`}
                                        onClick={() => setCurrentSeason(season)}
                                    >
                                        Season-{season}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                }
            />
            <h2 className="line-clamp-1 text-sm text-foreground/50 py-2">{title}</h2>
            <ul className="aspect-[9/16] overflow-y-auto scrollbar-thin scrollbar-color ">
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
