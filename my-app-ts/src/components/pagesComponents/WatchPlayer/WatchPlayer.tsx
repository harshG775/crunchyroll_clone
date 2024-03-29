// "use client";
// import React, { useEffect, useState } from "react";
// const MOVIE = process.env.PUBLIC_MOVIE_PLAYER_URL;
// const TV = process.env.PUBLIC_TV_PLAYER_URL;
import {Iframe_tv, Iframe_movie} from "./Iframe";
export type Type_props = {
    domain: string;
    media_type: "movie" | "tv";
    title: string;
    id: string;
};
export default function WatchPlayer({media_type, title, id }: Type_props) {
    return (
        <section>
            <div>
                {media_type === "movie" ? (
                    <Iframe_movie domain="me" title={title} id={id} />
                ): (
                    <Iframe_tv domain="me" title={title} id={id} season="1" episode="1"/>
                )}
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
