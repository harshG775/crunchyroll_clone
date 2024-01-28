"use client";
import { I } from "@/components/iconify/I";
import { useState } from "react";
import useQuery from "@/hooks/useQuery";
import axios_tmdb from "@/lib/axios_tmdb";
// import { useFrom } from "react-hook-form";
function SearchBarForm() {
    // const { register, handleSubmit } = useFrom();
    const [QInput, setQInput] = useState("");
    const [media_type, setMedia_type] = useState("multi");
    const {result: queryResult , isLoading, isSuccess, error, setTrigger}=useQuery( async () => {
        return axios_tmdb(`https://api.themoviedb.org/3/search/${media_type}?query=${QInput}`);
    });
    const handleMediaType=(mediaType)=>{
        setMedia_type(mediaType)
    }
	const onSearch = () => {
        setTrigger((prev) => prev + 1);
	};
	return (
        <div className="bg-neutral-900 text-neutral-50">
            <form className="relative grid gap-2 p-2 border-b-2 border-neutral-50/10" action="/">
                <div className="flex items-center ">
                    <label className="hidden" htmlFor="searchQuery">
                        search
                    </label>
                    <input
                        className=" text-neutral-950 w-full block px-4 py-2 pr-12
                        outline outline-2 outline-gray-500/20 
                        focus:outline-gray-500/40  "
                        id="searchQuery"
                        type="search"
                        placeholder="Search"
                        value={QInput}
                        onChange={(e) => setQInput(e.target.value)}
                        onKeyUp={onSearch}
                    />

                    <button type="button" className="absolute right-4 text-neutral-950 bg-neutral-50 p-2 text-xl rounded ">
                        <I icon="material-symbols:search" />
                    </button>
                </div>
                <div className="flex justify-between">
                    <ul className="flex gap-2">
                        <li>
                            <button className={media_type=="multi"?" text-blue-600":""} type="button" onClick={()=>handleMediaType("multi")}>All</button>
                        </li>
                        <li>
                            <button className={media_type=="movie"?" text-blue-600":""} type="button" onClick={()=>handleMediaType("movie")}>Movie</button>
                        </li>
                        <li>
                            <button className={media_type=="tv"?" text-blue-600":""} type="button" onClick={()=>handleMediaType("tv")}>Tv Show</button>
                        </li>
                    </ul>
                    <div>Filter</div>
                </div>
            </form>
            <div className="bg-neutral-800/50 text-center p-4">
                {!isLoading?
                <ul className="max-h-96 overflow-auto">
                    {queryResult?.data?.results?.map((result)=>(
                        <li key={result.id}>
                            <div key={result.id}>{result.name}</div>
                            <div key={result.id}>{result.name}</div>
                        </li>
                    ))}
                </ul>
                :
                <div >Results</div>
                }
            </div>
        </div>
	);
}
export default function SearchBar() {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    return(
        <div>
            <button onClick={() => setIsSearchBarOpen(!isSearchBarOpen)} className="transition-colors duration-300 text-neutral-100 p-2 text-xl rounded-full outline outline-2 outline-gray-100 bg-gray-800 hover:bg-gray-100 hover:text-neutral-800 hover:outline-slate-900 " type="submit">
                <I icon="material-symbols:search" />
            </button>
            <div className={` ${isSearchBarOpen ? "block" : "hidden" } absolute top-14 left-0 right-0`}>
                <SearchBarForm/>
            </div>
        </div>
    )
}