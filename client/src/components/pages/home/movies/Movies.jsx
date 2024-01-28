import Section from "../../section/Section";
import TMDB from "../../../../helper/TMDB";
import { useQuery } from "@tanstack/react-query";
function NowPlaying() {
	const { data: NowPlaying } = useQuery({
		queryKey: ["NowPlaying"],
		queryFn: () => TMDB.NowPlaying_Movies(1),
	});
	return (
		<Section
			data={NowPlaying?.data}
			title={"Now Playing"}
			iconName={"game-icons:fox"}
		/>
	);
}
export default function Movies() {
	return (
		<div className="mt-12">
            <h1>Movies</h1>
			<NowPlaying />
		</div>
	);
}
