"use client";
import List from "@/components/ui/List";
import Tabs from "@/components/ui/Tabs";
import Card, { CardType } from "@/components/ui/cardsSection/Card";
import { Axios_tmdb } from "@/lib/Axios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export default function Trending() {
    const [mediaType, setMediaType] = useState("all");
    const [timeWindow, setTimeWindow] = useState("day");
    const { data,status,isError } = useQuery({
        queryKey: ["trending", mediaType, timeWindow],
        queryFn: () => Axios_tmdb.get(`/trending/${mediaType}/${timeWindow}?language=en-US`),
        
    });
    return (
        <section className=" container transition-[max-width] duration-300 mx-auto p-2">
            <div className="grid gap-2 grid-cols-[1fr] sm:grid-cols-[1fr_auto]">
                <h2 className="text-2xl font-semibold">Trending</h2>
                <div className="flex justify-between flex-wrap gap-2">
                    <Tabs
                        currentTab={mediaType}
                        setCurrentTab={setMediaType}
                        tabs={["all", "movie", "tv"]}
                    />
                    <Tabs
                        currentTab={timeWindow}
                        setCurrentTab={setTimeWindow}
                        tabs={["day", "week"]}
                    />
                </div>
            </div>
            <div className="mt-6">
                <List
                    status={status}
                    data={data?.data?.results}
                    render={(card: CardType) => <Card key={card.id} card={card} />}
                    className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
                />
            </div>
        </section>
    );
}
