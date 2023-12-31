import Section from "../../section/Section";
import TMDB from "@/helper/TMDB";
async function TrendingAll() {
	const resp = await TMDB.TrendingAll("day")
	return (
		<Section
			data={resp?.data}
			title={"Trending All"}
			iconName={"game-icons:fox"}
		/>
	);
}

export default function CarouselHero() {
	return (
		<>
			<TrendingAll />
		</>
	);
}
