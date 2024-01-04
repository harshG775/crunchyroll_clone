import TMDB from "@/helper/TMDB";
import Carousel from "../../../carousels/Carousel";
export default async function CarouselHero() {
    const resp = await TMDB.TrendingAll("day");

	return (
        <section className="max-w-8xl mx-auto p-4">
            <Carousel data={resp.data.results}/>
        </section>
	);
}
