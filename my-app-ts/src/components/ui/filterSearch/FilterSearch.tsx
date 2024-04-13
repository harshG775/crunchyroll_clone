"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Axios_tmdb } from "@/lib/Axios_server";
import React from "react";

const searchFormSchema = z.object({
    search: z.string().min(1, "Please enter something to search"),
    media_type: z.string(),
    ratting: z.string(),
    sort_by: z.string(),
    genre: z.string(),
});
type SearchFormInput = z.infer<typeof searchFormSchema>;

export default function FilterSearch() {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });
    const onSubmit = async (data: SearchFormInput) => {
        const resp = await Axios_tmdb.get("movie", {
            params: {
                include_adult: false,
                include_null_first_air_dates: false,
                language: "en-US",
                page: 1,
                sort_by: "popularity.desc",
            },
        });
        console.log(data);
        console.log(resp);
    };
    return (
        <header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
                    <li>
                        <label hidden htmlFor="search">
                            search
                        </label>
                        <input
                            className="w-full"
                            type="text"
                            id="search"
                            placeholder="Search..."
                            {...register("search")}
                        />
                    </li>
                    <li>
                        <select id="media_type" {...register("media_type")}>
                            <option value="">Select Type</option>
                            <option value="movie">movie</option>
                            <option value="tv">tv</option>
                        </select>
                    </li>
                    <li>
                        <select id="ratting" {...register("ratting")}>
                            <option value="">Select Rating</option>
                            <option value="allAges">All Ages</option>
                            <option value="adult">adult</option>
                        </select>
                    </li>
                    <li>
                        <select id="genre" {...register("genre")}>
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Comedy">Comedy</option>
                        </select>
                    </li>
                    <li>
                        <button className=" bg-lime-600 rounded-md py-0.5 px-4">
                            Search
                        </button>
                    </li>
                </ul>
            </form>
        </header>
    );
}