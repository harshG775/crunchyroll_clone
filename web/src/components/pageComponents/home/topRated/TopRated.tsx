"use client";
import List from "@/components/ui/List";
import Tabs from "@/components/ui/Tabs";
import Card, { CardType } from "@/components/ui/cardsSection/Card";
import { Axios_tmdb } from "@/lib/Axios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export default function TopRated() {
    const [mediaType, setMediaType] = useState("movie");
    const { data, status } = useQuery({
        queryKey: ["top_rated", mediaType],
        queryFn: () =>
            Axios_tmdb.get(`/${mediaType}/top_rated?language=en-US&region=IN&page=1`),
    });
    return (
        <section className=" p-2">
            <div className="grid gap-2 grid-cols-[1fr] sm:grid-cols-[1fr_auto]">
                <h2 className="text-2xl font-semibold">Top Rated</h2>
                <div className="flex justify-between flex-wrap gap-2">
                    <Tabs
                        currentTab={mediaType}
                        setCurrentTab={setMediaType}
                        tabs={["movie", "tv"]}
                    />
                </div>
            </div>
            <div className="mt-6 scrollbar-thin scrollbar-color lg:max-h-[855px] lg:overflow-auto">
                <List
                    status={status}
                    data={data?.data?.results}
                    render={(card: CardType) => <Card key={card.id} card={card} mediaType={mediaType}/>}
                    className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-2"
                />
            </div>
        </section>
    );
}
