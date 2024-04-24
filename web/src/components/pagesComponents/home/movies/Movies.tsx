import TMDB from "@/utils/TMDB";
import Section from "@/components/section/Section";
async function NowPlaying() {
	try {
		const resp = await TMDB.NowPlaying_Movies(1);
		return (
			<Section
				results={resp.data.results}
				title={"Now Playing"}
				iconName={"game-icons:fox"}
				media_type={"movie"}
			/>
		);
	} catch (error) {
		console.log(error);
		return <h1>Something went wrong Movies.js</h1>;
	}
}
export default function Movies() {
	return (
		<div className="mt-12">
			<h1>Movies</h1>
			<NowPlaying />
		</div>
	);
}
