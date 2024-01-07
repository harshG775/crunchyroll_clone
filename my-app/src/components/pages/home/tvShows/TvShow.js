import TMDB from "@/helper/TMDB";
import Section from "@/components/section/Section";
export default async function TvShow() {
    const resp = await TMDB.TrendingTvShows()
	return (
        <div className="mt-12">
            <Section
                data={resp.data}
                title={"Now Playing"}
                iconName={"game-icons:fox"}
                media_type={"tv"}
            />
        </div>
	);
}