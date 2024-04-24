// @ts-nocheck
"use client";
import TMDB from "@/helper/TMDB";

import SearchForm from "./items/SearchForm";
import Section from "@/components/section/Section";
import { useState } from "react";
export default function Search() {
	const [searchResult, setSearchResult] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const handleSearch = async (data) => {
        try {
            setIsLoading(true);
            const resp = await TMDB.MultiSearch(data.media_type, 1, {
                with_genres: data.with_genres,
                language: data.language,
                include_adult: data.include_adult,
                query: data.query,
            });
            setSearchResult(resp);
            setIsLoading(false);
            
        } catch (error) {
            isLoading(false);
            setIsError(true);
            console.log(error);
        }
	};
	return (
		<>
			<SearchForm handleSearch={handleSearch} />
            {isError?"something went wrong":null}
            {isLoading?"loading":
            searchResult && (
                <Section
                    data={searchResult.data}
                    title={"search results"}
                    iconName={"game-icons:fox"}
                    media_type={"movie"}
                />
            )
            }
		</>
	);
}
