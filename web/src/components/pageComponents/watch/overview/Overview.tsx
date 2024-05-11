"use client";
import React from "react";
import Player from "./Player";

type OverviewPropsType = {
    data: any;
    media_type: string;
};

export default function Overview({ data, media_type }: OverviewPropsType) {
    console.log(data);
    return (
        <section className="p-4 m-4">
            <Player data={data} media_type={media_type as "movie" | "tv"}/>
            {/* <Overview data={data} media_type={media_type as "movie" | "tv"} /> */}
        </section>
    );
}