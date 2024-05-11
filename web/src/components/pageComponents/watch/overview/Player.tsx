"use client";
import React from "react";
import PlayerMovie from "./PlayerMovie";
import PlayerTv from "./PlayerTv";

type DataType = {
    backdrop_path: string;
    id: number;
    title?: string;
    name?: string;
};
type PlayerPropsType = {
    data: DataType;
    media_type: "movie" | "tv";
};

export default function Player({ data, media_type }: PlayerPropsType) {
    // const { backdrop_path, id, title, name } = data;
    // const Title = title ? title : name;
    return (
        <>
            <div>
                {media_type === "movie" ? (
                    <PlayerMovie data={data} />
                ) : (
                    <PlayerTv data={data} />
                )}
            </div>
        </>
    );
}
