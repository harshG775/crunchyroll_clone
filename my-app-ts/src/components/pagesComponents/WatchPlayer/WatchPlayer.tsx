import React from "react";
// /movie/watch?id=84958&title=Loki
export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
};
export default function WatchPlayer({media_type, title, id }: Type_props) {
    return (
        <section>
            <div>
                <iframe
                    className="aspect-video w-full rounded-lg"
                    src={`https://vidsrc.to/embed/movie/${id}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <h1>{title}</h1>
            </div>

            {media_type === "movie" ? (
                <div>movie</div>
            ) : (
                <div>Episode</div>
            )}
        </section>
    );
}
