"use client"
import PlayerMovie from "./PlayerMovie";
import PlayerTv from "./PlayerTv";

export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
    media_src: string
    mediaData?: any
};

export default function PlayerSection({media_type, title, id,media_src, mediaData }: Type_props) {
    const url = media_src.replace("{domain}", "pro");
    return (
        <section>
            {media_type === "movie" ? (
                <PlayerMovie title={title} id={id} media_src={`${url}/movie/${id}`}/>
            ) : (
                <PlayerTv title={title} id={id} url={url} mediaData={mediaData}/>
            )}
        </section>
    );
}
