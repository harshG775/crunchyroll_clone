import Recommended from "@/components/pageComponents/watch/Recommended";
import Similar from "@/components/pageComponents/watch/Similar";

import Overview from "@/components/pageComponents/watch/overview/Overview";
import { Axios_tmdb } from "@/lib/Axios";
type Type_searchParams = {
    id: string;
    media_type: string;
    title: string;
}

export default async function Watch({searchParams}: {searchParams: Type_searchParams}) {
    try {
        const {media_type,id} = searchParams
        if (!media_type && !id) {
            return(
                <div className="grid gap-2 place-content-center min-h-[calc(100vh-4rem)] text-center">
                    <h1>No data</h1>
                </div>
            )
        }
        const {data} = await Axios_tmdb.get(`/${media_type}/${searchParams?.id}`);
        return (
            <main>
                <div className="max-w-8xl mx-auto grid lg:grid-cols-[4fr_1fr]">
                    <Overview data={data} media_type={media_type as "movie" | "tv"}/>
                    <Recommended id={1}/>
                </div>
                <div className="max-w-8xl mx-auto grid lg:grid-cols-[4fr_1fr]">
                    <section className="lg:order-1 order-2">
                        comments
                    </section>
                    <Similar id={12} className="lg:order-2 order-1"/>
                </div>
            </main>
        );
        
    } catch (error: any) {
        return (
            <div className="grid gap-2 place-content-center min-h-[calc(100vh-4rem)] text-center">
                <h1>{error?.message}</h1>
                <p>{error?.response?.data?.status_message}</p>
            </div>
        );
    }
}
