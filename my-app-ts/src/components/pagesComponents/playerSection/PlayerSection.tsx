"use client"
import PlayerMovie from "./PlayerMovie";
import PlayerTv from "./PlayerTv";

export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
};

export default function PlayerSection({media_type, title, id }: Type_props) {
    const {PUBLIC_IFRAME_BASE_URL} = process.env;
    let baseUrl = PUBLIC_IFRAME_BASE_URL.replace("{domain}","me")
    return (
        <section>
            {media_type === "movie" ? (
                <PlayerMovie title={title} id={id} baseUrl={`${baseUrl}/movie/${id}`}/>
            ) : (
                <PlayerTv title={title} id={id} baseUrl={`${baseUrl}/tv/${id}/1-2`}/>
            )}
            <div className="text-xs">
                dub || sub
            </div>
            <div>
                episode list
            </div>
            <div>
                details, view and Ratings 
            </div>
        </section>
    );
}
