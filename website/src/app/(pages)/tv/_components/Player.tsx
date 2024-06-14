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
    const [serverLoading, setServerLoading] = useState(false);
    const [server, setServer] = useState("pro");
    const currentSeason = playerState((state) => state.currentSeason);
    const currentEpisode = playerState((state) => state.currentEpisode);

    const handleServer =async (server: string) => {
        setServerLoading(true);
        setServer(server);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setServerLoading(false);
    }
    return (
        <header className="bg-secondary/50 px-2 rounded-md">
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
            <div className="py-2 flex gap-2 ">
                <Button
                    disabled={serverLoading}
                    className="text-xs"
                    variant={server === "pro" ? "default" : "outline"}
                    onClick={() => handleServer("pro")}
                >
                    Server-1
                </Button>
                <Button
                    disabled={serverLoading}
                    className="text-xs"
                    variant={server === "to" ? "default" : "outline"}
                    onClick={() => handleServer("to")}
                >
                    Server-2
                </Button>
                <Button
                    disabled={serverLoading}
                    className="text-xs"
                    variant={server === "me" ? "default" : "outline"}
                    onClick={() => handleServer("me")}
                >
                    Server-3
                </Button>
            </div>
        </header>
    );
}

type BackgroundImageType = {
    url: string;
    children: React.ReactNode;
};