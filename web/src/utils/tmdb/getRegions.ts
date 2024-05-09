import { Axios_tmdb } from "@/lib/Axios";
type RegionType = {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
};
export default async function getRegions() {
    try {
        const { data }: { data: { results: RegionType[] } } = await Axios_tmdb.get(
            "/watch/providers/regions?language=en-US"
        );
        return data.results;
        
    } catch (error) {
        console.log(error);
        return "error";
    }
}
