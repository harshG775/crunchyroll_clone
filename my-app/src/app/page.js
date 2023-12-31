import Movies from "@/components/pages/home/movies/Movies";
import CarouselHero from "@/components/pages/home/carouselHero/CarouselHero";
export default async function Home() {
	return (
		<>
			<CarouselHero />
			<Movies />
		</>
	);
}
