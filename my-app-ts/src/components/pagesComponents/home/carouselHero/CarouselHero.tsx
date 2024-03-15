import TMDB from "@/utils/TMDB";
import Carousel from "@/components/carousels/Carousel";
export default async function CarouselHero() {
	try {
		const resp = await TMDB.TrendingAll(1,"day");

		return (
			<section
				className="py-12"
				style={{ backgroundImage: "url(/carousel-mini.svg)" }}>
				<Carousel results={resp.data.results} />
			</section>
		);
	} catch (error) {
		console.log(error);
		return <h1>Something went wrong Home Carousel</h1>;
	}
}
