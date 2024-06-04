"use client";

import { Status } from "@/types/TvDetailsType";
import { Iframe_tv } from "./Iframe";
import { playerState } from "@/store/zustand/PlayerState";
import { useState } from "react";
import { Button } from "@/components/ui/button";
type PlayerType = {
    status: Status;
    id: number;
    title: string;
    backdrop_path: string;
};
export default function Player({
    status,
    id,
    title,
    backdrop_path,
}: PlayerType) {
    const [server, setServer] = useState("pro");
    const currentSeason = playerState((state) => state.currentSeason);
    const currentEpisode = playerState((state) => state.currentEpisode);

    return (
        <header className="">
            {/* <BackgroundImage
                url={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            > */}
            {status === "Returning Series" ? (
                <Iframe_tv
                    domain={server}
                    title={title}
                    id={id}
                    season={currentSeason}
                    episode={currentEpisode}
                />
            ) : (
                <p>{status}</p>
            )}
            {/* </BackgroundImage> */}
            <div className="p-2 flex gap-2 bg-secondary/50 ">
                <Button
                    className="text-xs"
                    variant={server === "pro" ? "default" : "outline"}
                    onClick={() => setServer("pro")}
                >
                    Server-1
                </Button>
                <Button
                    className="text-xs"
                    variant={server === "to" ? "default" : "outline"}
                    onClick={() => setServer("to")}
                >
                    Server-2
                </Button>
                <Button
                    className="text-xs"
                    variant={server === "me" ? "default" : "outline"}
                    onClick={() => setServer("me")}
                >
                    Server-3
                </Button>
            </div>
            <p>Player</p>
            {"<Player status={data.status}/>"}
        </header>
    );
}

type BackgroundImageType = {
    url: string;
    children: React.ReactNode;
};
function BackgroundImage({ url, children, ...rest }: BackgroundImageType) {
    return (
        <div
            {...rest}
            style={{
                backgroundImage: `url(${url})`,
                backdropFilter: "opacity(20%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className=" rounded-lg aspect-video"
        >
            {children}
        </div>
    );
}
