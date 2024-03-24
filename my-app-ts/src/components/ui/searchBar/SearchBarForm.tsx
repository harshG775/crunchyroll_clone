import { I } from "@/components/icons/iconify/I"
import axios_tmdb from "@/lib/axios_tmdb"
import { useState } from "react"
import SearchResult from "./SearchResult"

export default function SearchBarForm({setIsSearchBarOpen}:any) {
    // const { register, handleSubmit } = useForm();
    const [QInput, setQInput] = useState("");
    const [media_type, setMedia_type] = useState("movie");
    
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState<any>(null);
    const [queryResult,setQueryResult] = useState<any>([]);
    
    const handleQuery = async () => {
        try {
            setLoading(true);
            setError(null)
            const {data} = await axios_tmdb(`https://api.themoviedb.org/3/search/${media_type}?query=${QInput}`);
            setQueryResult(data);
        } catch (error:any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleMediaType=(mediaType:string)=>{
        setMedia_type(mediaType)
    }
	return (
        <>
            <form className="relative grid gap-2 p-2 border-b-2 border-neutral-50/10">
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
                    />

                    <button onClick={handleQuery} type="button" className="absolute right-4 text-neutral-950 bg-neutral-50 p-2 text-xl rounded ">
                        <I icon="material-symbols:search" />
                    </button>
                </div>
                <div className="flex justify-between">
                    <ul className="flex gap-2">
                        {/* <li>
                            <button className={media_type=="multi"?" text-blue-600":""} type="button" onClick={()=>handleMediaType("multi")}>All</button>
                        </li> */}
                        <li>
                            <button
                                className={
                                    media_type == "movie"
                                        ? " text-blue-600"
                                        : ""
                                }
                                type="button"
                                onClick={() => handleMediaType("movie")}
                            >
                                Movie
                            </button>
                        </li>
                        <li>
                            <button
                                className={
                                    media_type == "tv" ? " text-blue-600" : ""
                                }
                                type="button"
                                onClick={() => handleMediaType("tv")}
                            >
                                Tv Show
                            </button>
                        </li>
                    </ul>
                    <div>Filter</div>
                </div>
            </form>

            {error && (
                <div className="bg-neutral-800/50 text-center p-4">
                    {error.message}
                </div>
            )}
            {!loading ? (
                <SearchResult
                    media_type={media_type}
                    queryResult={queryResult}
                    setIsSearchBarOpen={setIsSearchBarOpen}
                />
            ) : (
                <div className="bg-neutral-800/50 text-center p-4">Results</div>
            )}
        </>
    );
}