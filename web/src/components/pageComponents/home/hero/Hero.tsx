import Carousel from "@/components/ui/carousels/Carousel";
import { Axios_tmdb } from "@/lib/Axios";

export default async function Hero() {
    try {
        // const {data} = await Axios_tmdb.get("/trending/tv/day");
        const { data } = await Axios_tmdb.get(
            `/trending/all/day?language=en-US`
        );
        return (
            <header>
                <Carousel results={data?.results} />
            </header>
        );
    } catch (error) {
        return <div>ERROR</div>;
    }
}
