import Section from "../../section/Section";
import TMDB from "../../../../helper/TMDB";
import { useQuery } from "@tanstack/react-query";
function TrendingAll() {
	const { data: trendingAll } = useQuery({
		queryKey: ["trendingAll"],
		queryFn: () => TMDB.TrendingAll("day"),
	});
	return (
		<Section
			data={trendingAll?.data}
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
