"use client";
import Icon from "@/components/icons/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const filterSchema = z.object({
    media_type: z.enum(["movie", "tv", "multi"]),
    with_genres: z.string().optional(),
    language: z.string().optional(),
    include_adult: z.boolean().optional(),
    query: z.string().optional(),
})
type FilterFormTypes = z.infer<typeof filterSchema>;

const Languages= [
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
]
const classNames= {
    selectOption: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    Input: "mt-1 block w-full border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
}
export default function SearchForm() {
    
    const { register, handleSubmit } = useForm<FilterFormTypes>({
        resolver: zodResolver(filterSchema),
    });


    const onQuerySubmit = (data:FilterFormTypes) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onQuerySubmit)}>
            <ul>
                <li>
                    <label className="hidden" htmlFor="media_type">
                        Media Type
                    </label>
                    <select
                        className={classNames.selectOption}
                        {...register("media_type")}
                        name="media_type"
                        id="media_type"
                    >
                        <option value="movie">Movie</option>
                        <option value="tv">Tv Show</option>
                        <option value="multi">Multi</option>
                    </select>
                </li>
                {/* <li>
					<label className="hidden" htmlFor="genre">
						Genre
					</label>
					<select
						className={classNames.selectOption}
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
				</li> */}
				<li>
					<label className="hidden" htmlFor="language">
						Language
					</label>
					<select
						className={classNames.selectOption}
						{...register("language")}
						name="language"
						id="language"
						defaultValue="en-US">
						<option value="">Select Language</option>
						{Languages.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</li>
				<li>
					<label htmlFor="include_adult" className={`flex items-center justify-center gap-2 ${classNames.selectOption}`}>
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
                    <Icon name="Search" className="w-6 h-6" />
                </label>
                <input
                    className={`w-full ${classNames.Input}`}
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
