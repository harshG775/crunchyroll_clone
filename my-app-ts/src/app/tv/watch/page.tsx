import React from "react"
import WatchPlayer from "@/components/pagesComponents/WatchPlayer/WatchPlayer";
import axios_tmdb from "@/lib/axios_tmdb";
type Type_props = {
    searchParams:{
        id: string
        title: string
    }
}
export default async function Watch({searchParams}: Type_props) {
    const { id, title}=searchParams;
    const { data } = await axios_tmdb.get(`/tv/${searchParams?.id}`);
    // console.log(data)
    return (
        <div className="max-w-8xl p-4 mx-auto grid md:grid-cols-[3fr,1fr] gap-4">
            <WatchPlayer media_type="tv" title={title} id={id} />
            <aside>
                some data
            </aside>
        </div>
    );
}
