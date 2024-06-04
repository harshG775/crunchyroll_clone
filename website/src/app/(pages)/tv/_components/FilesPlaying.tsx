"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { playerState } from "@/store/zustand/PlayerState";
import { Season } from "@/types/TvDetailsType";
type FilesPlayingProps = {
    title: string;
    seasons: Season[];
    episodes?: number;
};
export default function FilesPlaying({ title, seasons }: FilesPlayingProps) {
    seasons = seasons.filter((season) => {
        if (season.name !== "Specials") {
            return season.episode_count > 0;
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
                        <select
                            onChange={(e) => {
                                setCurrentSeason(Number(e.target.value));
                                setCurrentEpisode(1);
                            }}
                            className="py-2 px-1 rounded-md "
                        >
                            {seasons.map((season) => (
                                <option key={season.season_number} value={season.season_number}>
                                    {season.name}
                                </option>
                            ))}
                        </select>
                    }
                />
                <h2 className="line-clamp-1 text-sm text-foreground/50 grid items-center grid-cols-[2fr_1fr] p-2 ">
                    {title}
                    <span>Episodes: {seasons[currentSeason-1].episode_count }</span>
                </h2>
            </div>
            <ul>
                {Array.from(
                    { length: seasons[currentSeason-1].episode_count },
                    (_, i) => i
                ).map((episode) => (
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
                ))}
            </ul>
        </section>
    );
}
