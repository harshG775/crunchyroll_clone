import TMDB from "@/helper/TMDB";
import Carousel from "../../../carousels/Carousel";
export default async function CarouselHero() {
    const resp = await TMDB.TrendingAll("day");

	return (
        <section style={{backgroundImage: "url(/carousel-mini.svg)"}}>
            <Carousel data={resp.data.results}/>
        </section>
	);
}
