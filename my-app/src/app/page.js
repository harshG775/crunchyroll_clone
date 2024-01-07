import Movies from "@/components/pages/home/movies/Movies";
import CarouselHero from "@/components/pages/home/carouselHero/CarouselHero";
import TvShow from "@/components/pages/home/tvShows/TvShow";
export default async function Home() {
	return (
		<>
			<CarouselHero />
			<Movies />
			<TvShow />
		</>
	);
}
