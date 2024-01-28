import TMDB from "@/helper/TMDB";
import Section from "@/components/section/Section";
async function Trending() {
	try {
		const resp = await TMDB.Trending(3, "tv");
		return (
			<Section
				data={resp.data}
				title={"Now Playing"}
				iconName={"game-icons:fox"}
				media_type={"tv"}
			/>
		);
	} catch (error) {
		console.log(error);
		return <h1>Something went wrong Tv Show</h1>;
	}
}
export default function TvShow() {
	return (
		<div className="mt-12">
			<h1>TvShow</h1>
			<Trending />
		</div>
	);
}
