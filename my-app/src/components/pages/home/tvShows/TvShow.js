import TMDB from "@/helper/TMDB";
import Section from "@/components/section/Section";
import {I} from "@/components/iconify/I";
async function Trending() {
    const resp = await TMDB.TrendingTvShows()
	return (
		<Section
			data={resp.data}
			title={"Now Playing"}
			iconName={"game-icons:fox"}
            media_type={"tv"}
		/>
	);
}
export default function TvShow() {
	return (
		<div className="mt-12">
            <h1>TvShow <I icon="game-icons:fox" /></h1>
			<Trending/>
		</div>
	);
}
