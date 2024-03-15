import Movies from "@/components/pages/home/movies/Movies";
import CarouselHero from "@/components/pages/home/carouselHero/CarouselHero";
import TvShow from "@/components/pages/home/tvShows/TvShow";
import Button from "@/components/ui/Button";
export default async function Home() {
	return (
		<>
        <Button>
            Sign Up
        </Button>
			<CarouselHero />
			<Movies />
			<TvShow />
		</>
	);
}
