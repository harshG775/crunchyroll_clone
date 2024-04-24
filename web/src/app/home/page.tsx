import CarouselHero from "@/components/pagesComponents/home/carouselHero/CarouselHero";
import Movies from "@/components/pagesComponents/home/movies/Movies";
import TvShow from "@/components/pagesComponents/home/tvShows/TvShow";
export default async function Home() {
	return (
		<>
			<CarouselHero />
			<Movies />
			<TvShow />
		</>
	);
}
