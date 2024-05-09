import Image from "next/image";
// import { I } from "@/components/icons/iconify/I";
import Link from "next/link";

export type type_data = {
    backdrop_path: string,
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    original_title: string,
    release_date: string,
    genres: {id: number, name: string}[],
    runtime: number
}
export default function Overview({data,media_type}: {data: type_data,media_type:"movie"|"tv"}) {
    const {backdrop_path,title, overview, poster_path} = data
    // console.log(data)
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
                                {/* <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" />
                                <I className="cursor-pointer" icon="ic:round-star" /> */}
                            </div>
                        </div>
                        <div className=" grid grid-cols-2 gap-2">
                            <button className=" rounded-md px-10 py-2 font-semibold bg-blue-500 hover:bg-blue-800 transition-colors duration-300">Add</button>
                            {/* <button className=" rounded-md px-10 py-2 font-medium bg-blue-700 hover:bg-blue-900 transition-colors duration-300">Watch</button> */}
                            <Link href={`/${media_type}/watch?id=${data.id}&title=${data.title}`} className=" rounded-md px-10 py-2 font-medium bg-blue-700 hover:bg-blue-900 transition-colors duration-300">Watch</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-2  grid gap-4 lg:grid-cols-3">
                        <div className="lg:col-span-2 flex flex-col ">
                            <h1 className="text-3xl lg:text-start text-center">{title}</h1>
                            <p>{overview}</p>
                        </div>
                        <ul className=" [&>li>span:nth-child(2)]:text-neutral-400">
                            <li>
                                <span>Original Title: </span>
                                <span>{data.original_title}</span>
                            </li>
                            <li>
                                <span>Release Date:</span> 
                                <span>{data.release_date}</span>
                            </li>
                            <li>
                                <span>Genres:</span> 
                                <span>{data.genres.map((genre) => genre.name).join(", ")}</span>
                            </li>
                            <li>
                                <span>Duration: </span>
                                <span>{data.runtime} mins</span>
                            </li>
                            <li>
                                <span>Rating:</span> 
                                <span>{data.vote_average}/10</span>
                            </li>
                            {/* <li>
                                <span>Language:</span> 
                                <span>{data.original_language}</span>
                            </li>
                            <li>
                                <span>Country: </span>
                                <span>{data.production_countries[0].name}</span>
                            </li>
                            <li>
                                <span>Production:</span> 
                                <span>{data.production_companies[0].name}</span>
                            </li>
                            <li>
                                <span>Homepage:</span> 
                                <span>{data.homepage}</span>
                            </li>
                            <li>
                                <span>Adult:</span> 
                                <span>{data.adult ? "Yes" : "No"}</span>
                            </li>
                            <li>
                                <span>Status: </span>
                                <span>{data.status}</span>
                            </li>
                            <li>
                                <span>Spoken Languages:</span>
                                <span>{data.spoken_languages.map((language) => language.english_name).join(", ")}</span>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}