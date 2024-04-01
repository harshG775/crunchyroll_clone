"use client"
import PlayerMovie from "./PlayerMovie";
import PlayerTv from "./PlayerTv";

export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
};

const PUBLIC_IFRAME_BASE_URL = process.env.PUBLIC_IFRAME_BASE_URL;
export default function PlayerSection({media_type, title, id }: Type_props) {
    let baseUrl = PUBLIC_IFRAME_BASE_URL && PUBLIC_IFRAME_BASE_URL.replace("{domain}","me")
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
