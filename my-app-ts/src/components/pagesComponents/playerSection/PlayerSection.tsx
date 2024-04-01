"use client"
import PlayerMovie from "./PlayerMovie";
import PlayerTv from "./PlayerTv";

export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
    media_src: string
};

export default function PlayerSection({media_type, title, id,media_src }: Type_props) {
    const url = media_src.replace("{domain}", "me");
    return (
        <section>
            {media_type === "movie" ? (
                <PlayerMovie title={title} id={id} media_src={`${url}/movie/${id}`}/>
            ) : (
                <PlayerTv title={title} id={id} media_src={`${url}/tv/${id}/1-2`}/>
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
