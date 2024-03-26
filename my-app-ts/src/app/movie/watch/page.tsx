import React from "react"
import WatchPlayer from "@/components/pagesComponents/WatchPlayer/WatchPlayer";
// /movie/watch?id=84958&title=Loki
type Type_props = {
    searchParams:{
        id: string
        title: string
    }
}
export default function Watch({searchParams}: Type_props) {
    const { id, title}=searchParams;
    return (
        <div className="max-w-8xl p-4 mx-auto grid md:grid-cols-[3fr,1fr] gap-4">
            <WatchPlayer media_type="movie" title={title} id={id} />
            <aside>
                some data
            </aside>
        </div>
    );
}
