import TMDB from "@/helper/TMDB";
import Section from "@/components/section/Section";
async function NowPlaying() {
    const resp = await TMDB.NowPlaying_Movies(1)
	return (
		<Section
			data={resp.data}
			title={"Now Playing"}
			iconName={"game-icons:fox"}
            media_type={"movie"}
		/>
	);
}
export default function Movies() {
	return (
		<div className="mt-12">
            <h1>Movies</h1>
			<NowPlaying/>
		</div>
	);
}
