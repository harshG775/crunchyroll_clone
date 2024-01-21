import Image from "next/image";
import TMDB from "@/helper/TMDB";
import { I } from "@/components/iconify/I";

function Header({data}) {
    const {backdrop_path,title, overview, poster_path} = data
    return (
        <>
            <div className="z-0 absolute inset-[0_0_auto_0] min-h-[30rem] bg-cover bg-[top_left] bg-no-repeat" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}></div>
            <header className="z-10 relative backdrop-blur-sm bg-neutral-900/40">
                <div className="container mx-auto lg:min-h-[30rem] sm:min-h-[45rem] px-4 py-20 gap-4 grid lg:grid-cols-2">
                    <div className="grid place-content-center lg:place-content-start">
                        <Image
                            className="rounded-lg"
                            width={280}
                            height={360}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={title}
                            loading="lazy"
                        />
                    </div>
                    <div className="grid gap-2 justify-center items-end">
                        <div className=" backdrop-blur-xl bg-neutral-950/60 rounded-md p-2 grid gap-2">
                            <div className="px-4 text-2xl">{data.vote_average}/10</div>
                            <div className="grid grid-cols-5 px-4 text-3xl text-yellow-500">
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 gap-2">
                            <button className=" rounded-md px-10 py-2 font-semibold bg-blue-500 hover:bg-blue-800 transition-colors duration-300">Add</button>
                            <button className=" rounded-md px-10 py-2 font-medium bg-blue-700 hover:bg-blue-900 transition-colors duration-300">Watch</button>
                        </div>
                    </div>
                    <div className="lg:col-span-2  grid gap-4 lg:grid-cols-3">
                        <div className="lg:col-span-2 flex flex-col ">
                            <h1 className="text-3xl lg:text-start text-center">{title}</h1>
                            <p>{overview}</p>
                        </div>
                        <ul>
                            <li>Release Date: {data.release_date}</li>
                            <li>Genres: {data.genres.map((genre) => genre.name).join(", ")}</li>
                            <li>Duration: {data.runtime} mins</li>
                            <li>Rating: {data.vote_average}/10</li>
                            <li>Language: {data.original_language}</li>
                            <li>Country: {data.production_countries[0].name}</li>
                            <li>Production: {data.production_companies[0].name}</li>
                            <li>Homepage: {data.homepage}</li>
                            <li>Adult: {data.adult ? "Yes" : "No"}</li>
                            <li>Status: {data.status}</li>
                            <li>Spoken Languages: {data.spoken_languages.map((language) => language.english_name).join(", ")}</li>
                            <li>IMDB ID: {data.imdb_id}</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default async function MediaId({ params }) {
	const id = params?.mediaId.split(".%3D.")[1];
	try {
		const { data } = await TMDB.DetailsById("movie", id);

		return (
			<div>
				{data && <Header data={data}/>}
			</div>
		);
	} catch (error) {
		console.log(error);
		return (
			<div className="grid place-content-center min-h-screen">
				Something went wrong
			</div>
		);
	}
}
