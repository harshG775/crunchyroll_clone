import React from "react";
import { Iframe_movie } from "./Iframe";
import { MovieDetailsType } from "@/types/DetailsType";
enum movieStatus {
    Rumored = "Rumored",
    Planned = "Planned",
    PostProduction = "Post Production",
    Released = "Released",
    Canceled = "Canceled",
    InTheaters = "In Theaters",
}
export default function PlayerMovie({ data }: { data: any }) {
    const { id, title, status } = data as MovieDetailsType;
    return (
        <div>
            {status === movieStatus.Released ? (
                <>
                    <Iframe_movie domain="pro" title={title} id={id} />
                </>
            ) : (
                status
            )}
        </div>
    );
}

