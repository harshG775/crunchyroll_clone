"use client"
import TMDB from "@/helper/TMDB";
import { useState } from "react";
export default function Search() {
    const [movieGenre, setMovieGenre] = useState([]);
    const getMovieGenre = async ()=>{
        const movieGenre = await TMDB.GetGenres("movie",{ language: "en-US" });
        console.log(movieGenre)
        setMovieGenre(movieGenre.data);
    }
	return (
		<form action="">
			<ul>
                <li>
                    <label htmlFor="media_type">Media Type</label>
                    <select onChange={getMovieGenre} name="media_type" id="media_type">
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
			</ul>
		</form>
	);
}
