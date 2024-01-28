"use client";
import { useForm } from "react-hook-form";
import TMDB from "@/helper/TMDB";
import { useEffect, useState } from "react";
import { I } from "@/components/iconify/I";
const SearchPageData = {
	Languages: [
		{ code: "en-US", name: "English (US)" },
		{ code: "es-ES", name: "Spanish (Spain)" },
		{ code: "fr-FR", name: "French (France)" },
		{ code: "de-DE", name: "German (Germany)" },
		{ code: "it-IT", name: "Italian (Italy)" },
		{ code: "ja-JP", name: "Japanese (Japan)" },
		{ code: "zh-CN", name: "Chinese (China)" },
		{ code: "ru-RU", name: "Russian (Russia)" },
		{ code: "ar-SA", name: "Arabic (Saudi Arabia)" },
		{ code: "hi-IN", name: "Hindi (India)" },
		{ code: "pt-BR", name: "Portuguese (Brazil)" },
		{ code: "ko-KR", name: "Korean (South Korea)" },
		{ code: "tr-TR", name: "Turkish (Turkey)" },
		{ code: "nl-NL", name: "Dutch (Netherlands)" },
		{ code: "sv-SE", name: "Swedish (Sweden)" },
		{ code: "fi-FI", name: "Finnish (Finland)" },
		{ code: "pl-PL", name: "Polish (Poland)" },
		{ code: "th-TH", name: "Thai (Thailand)" },
		{ code: "cs-CZ", name: "Czech (Czech Republic)" },
		{ code: "id-ID", name: "Indonesian (Indonesia)" },
	],
    classNames: {
        selectOption: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
        Input: "mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    }
};

export default function SearchForm({handleSearch}) {
	const { register, handleSubmit, getValues } = useForm();

	const [genre, setGenre] = useState([]);
	const getMovieGenre = async () => {
		const genre = await TMDB.GetGenres(getValues("media_type"), {
			language: "en-US",
		});
		setGenre(genre.data.genres);
	};
	useEffect(() => {
		getMovieGenre("movie");
	}, []);
	return (
		<form onSubmit={handleSubmit(handleSearch)} className="max-w-4xl mx-auto p-4 ">
			<ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
				<li>
					<label className="hidden" htmlFor="media_type">
						Media Type
					</label>
					<select
						className={SearchPageData.classNames.selectOption}
						onChange={getMovieGenre}
						{...register("media_type")}
						name="media_type"
						id="media_type">
						<option value="movie">Movie</option>
						<option value="tv">Tv Show</option>
						<option value="multi">Multi</option>
					</select>
				</li>
				<li>
					<label className="hidden" htmlFor="genre">
						Genre
					</label>
					<select
						className={SearchPageData.classNames.selectOption}
						{...register("with_genres")}
						name="with_genres"
						id="with_genres">
                        <option value="">none</option>
						{genre?.map((with_genres) => (
							<option key={with_genres.id} value={with_genres.id}>
								{with_genres.name}
							</option>
						))}
					</select>
				</li>
				<li>
					<label className="hidden" htmlFor="language">
						Language
					</label>
					<select
						className={SearchPageData.classNames.selectOption}
						{...register("language")}
						name="language"
						id="language"
						defaultValue="en-US">
						<option value="">Select Language</option>
						{SearchPageData.Languages.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</li>
				<li>
					<label htmlFor="include_adult" className={`flex items-center justify-center gap-2 ${SearchPageData.classNames.selectOption}`}>
                        <input
                            type="checkbox"
                            {...register("include_adult")}
                            name="include_adult"
                            id="include_adult"
                        />
						rated 18+
					</label>
				</li>
			</ul>
            <div className="max-w-4xl mx-auto flex mt-4 relative">
                <label className="grid place-content-center" htmlFor="query">
                    <I className="text-2xl text-gray-400" icon="ic:baseline-search" />
                </label>
                <input
                    className={`w-full ${SearchPageData.classNames.Input}`}
                    {...register("query")}
                    type="search"
                    name="query"
                    id="query"
                    placeholder="Search"
                />
                <div className=" p-1">
                    <button className="border border-gray-400 text-gray-600 rounded-r-full p-2" type="submit">
                        Search
                    </button>
                </div>
            </div>
		</form>
	);
}