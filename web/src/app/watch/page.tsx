// import OverviewHeader from "@/components/pagesComponents/overview/OverviewHeader";

import Overview from "@/components/pageComponents/watch/Overview";
import Player from "@/components/pageComponents/watch/Player";
import { Axios_tmdb } from "@/lib/Axios";
type Type_searchParams = {
    id: string;
    media_type: string;
    title: string;
}
export default async function page({searchParams}: {searchParams: Type_searchParams}) {
    try {
        const {media_type,id} = searchParams
        console.log(searchParams)
        if (!media_type && !id) {
            return(
                <div className="grid gap-2 place-content-center min-h-[calc(100vh-4rem)] text-center">
                    <h1>No data</h1>
                </div>
            )
        }
        const {data} = await Axios_tmdb.get(`/${media_type}/${searchParams?.id}`);
        return (
            <div>
                <Player data={data} media_type={media_type as "movie" | "tv"}/>
                {/* <Overview data={data} media_type={media_type as "movie" | "tv"} /> */}
            </div>
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
