import React from "react";
import { Iframe_movie } from "./Iframe";
// import { MovieDetailsType } from "@/types/DetailsType";
enum movieStatus {
    Rumored = "Rumored",
    Planned = "Planned",
    PostProduction = "Post Production",
    Released = "Released",
    Canceled = "Canceled",
    InTheaters = "In Theaters",
}
export default function PlayerMovie({ data }: { data: any }) {
    const { id, title, status } = data;
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

//
// function getIsReleasedMovie(releaseDate: string) {
//     // Convert release date string to a Date object
//     const releaseDateTime = new Date(releaseDate);

//     // Get the current date
//     const currentDate = new Date();

//     // Compare the release date with the current date
//     if (currentDate >= releaseDateTime) {
//         return true; // Release date has passed
//     } else {
//         return false; // Release date is in the future
//     }
// }
