import TMDB from "@/helper/TMDB";
import Section from "@/components/section/Section";

export default async function Movies() {
	const resp = await TMDB.NowPlaying_Movies(1);
	return (
		<div className="mt-12">
			<Section
				data={resp.data}
				title={"Now Playing"}
				iconName={"game-icons:fox"}
				media_type={"movie"}
			/>
		</div>
	);
}
