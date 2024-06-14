"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { playerState } from "@/store/zustand/PlayerState";
import { Season } from "@/types/TvDetailsType";
type FilesPlayingProps = {
    title: string;
    seasons: Season[];
    episodes?: number;
};
export default function FilesPlaying({ seasons }: FilesPlayingProps) {
    seasons = seasons.filter((season) => {
        const currentData = new Date();
        const air_date = new Date(season.air_date);
        if (season.name !== "Specials") {
            return season.air_date
                ? air_date <= currentData
                : season.episode_count > 0;
        }
    });
    const currentSeason = playerState((state) => state.currentSeason);
    const setCurrentSeason = playerState((state) => state.setCurrentSeason);

    const currentEpisode = playerState((state) => state.currentEpisode);
    const setCurrentEpisode = playerState((state) => state.setCurrentEpisode);
    return (
        <section className="h-96 lg:h-full overflow-y-auto scrollbar-thin scrollbar-color border-b-2">
            <div className="sticky top-0 bg-background border-b-2">
                <SectionTitle
                    name="Playing"
                    titleRight={
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="text-sm m-2">
                                    Season
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {seasons.map((season) => (
                                    <DropdownMenuItem
                                        key={season.season_number}
                                        onClick={() => {
                                            setCurrentSeason(
                                                season.season_number
                                            );
                                            setCurrentEpisode(1);
                                        }}
                                    >
                                        {season.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                />
                <h2 className="line-clamp-1 text-sm text-foreground/50 grid items-center grid-cols-[2fr_1fr] p-2 ">
                    <span>Season: {currentSeason}</span>
                    <span>
                        Episodes: {seasons[currentSeason - 1].episode_count}
                    </span>
                </h2>
            </div>
            <ul>
                {Array.from(
                    { length: seasons[currentSeason - 1].episode_count },
                    (_, i) => i
                ).map((episode) => (
                    <li key={episode + 1} className="p-1">
                        <Button
                            onClick={() => setCurrentEpisode(episode + 1)}
                            className={`${
                                episode + 1 === currentEpisode
                                    ? "text-primary-foreground  bg-primary/80 hover:bg-primary/90"
                                    : "text-secondary-foreground bg-secondary/80 hover:bg-secondary/90 "
                            } cursor-pointer text-sm px-2 py-1 w-full flex justify-start`}
                        >
                            Episode: {episode + 1}
                        </Button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
