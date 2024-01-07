"use client"
import TMDB from "@/helper/TMDB";
import { useEffect, useState } from "react";
import { I } from "@/components/iconify/I";
export default function Search() {
    const [movieGenre, setMovieGenre] = useState([]);
    const getMovieGenre = async (media_type)=>{
        const movieGenre = await TMDB.GetGenres(media_type,{ language: "en-US" });
        console.log(movieGenre)
        setMovieGenre(movieGenre.data);
    }
    useEffect(()=>{
        getMovieGenre("movie");
    },[])
	return (
		<form action="">
			<ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
                <li>
                    <label htmlFor="media_type">Media Type</label>
                    <select onChange={(e)=>getMovieGenre(e.target.value)} name="media_type" id="media_type">
                        <option value="movie">Movie</option>
                        <option value="tv">Tv Show</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre">
                        {movieGenre.genres?.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </li>
                <li>
                    <label htmlFor="language">Language</label>
                    <select
                        onChange={(e) => {setSelectedLanguage(e.target.value);}}
                        name="language"
                        id="language">
                        <option value="en-US">English</option>
                        <option value="hi-IN">Hindi</option>
                        {/* Add more language options as needed */}
                    </select>
                </li>
                <li className="col-span-2 shadow-lg flex">
                    <label className="flex-1 flex" htmlFor="query">
                        <I icon="ic:baseline-search" />
                        <input className="w-full" type="text" name="query" id="query" />
                    </label>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </li>
			</ul>
		</form>
	);
}
