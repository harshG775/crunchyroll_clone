import PlayerSection from "@/components/pagesComponents/playerSection/PlayerSection";
import { AxiosServer } from "@/lib/TMDB/AxiosTMDB";
import { envServer } from "@/utils/env/env.server";
type Type_props = {
    searchParams: {
        id: string;
        title: string;
    };
};
export default async function Watch({ searchParams }: Type_props) {
    const { id, title } = searchParams;
    const { IFRAME_BASE_URL } = envServer;
    try {
        // const {data} = await AxiosServer.get(`/movie/560016`);
        const {data} = await AxiosServer.get(`/tv/${id}`);


        return (
            <div className="max-w-8xl p-4 mx-auto grid md:grid-cols-[3fr,1fr] gap-4">
                <PlayerSection
                    media_type="tv"
                    title={title}
                    id={id}
                    media_src={IFRAME_BASE_URL}
                    mediaData={data}
                />
                <aside>some data</aside>
            </div>
        );
    } catch (error) {
        console.log(error);
        return <h1>Something went wrong</h1>;
    }
}
