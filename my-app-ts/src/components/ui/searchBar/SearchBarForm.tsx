import { I } from "@/components/icons/iconify/I";
import axios_tmdb from "@/lib/axios_tmdb";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import useDebounce from "@/hooks/useDebounce";

export default function SearchBarForm({ setIsSearchBarOpen }: any) {
    // const { register, handleSubmit } = useForm();
    const [QInput, setQInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const [queryResult, setQueryResult] = useState<any>([]);
    const deBounceSearch = useDebounce(QInput, 1000);

    useEffect(() => {
        const handleQuery = async () => {
            try {
                setLoading(true);
                setError(null);
                const { data } = await axios_tmdb(
                    `https://api.themoviedb.org/3/search/multi?query=${QInput}`
                );
                setQueryResult(data);
            } catch (error: any) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        handleQuery();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deBounceSearch]);
    return (
        <>
            <form
                className="relative grid gap-2 p-2 border-b-2 border-neutral-50/10"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex items-center ">
                    <label className="hidden" htmlFor="searchQuery">
                        search
                    </label>
                    <input
                        className=" w-full block px-4 py-2 pr-12
                        outline outline-2 outline-gray-500/20 
                        focus:outline-gray-500/40  "
                        id="searchQuery"
                        type="search"
                        placeholder="Search"
                        value={QInput}
                        onChange={(e) => setQInput(e.target.value)}
                    />

                    <button className="absolute right-4 text-neutral-950 bg-neutral-50 p-2 text-xl rounded ">
                        <I icon="material-symbols:search" />
                    </button>
                </div>
                <div className="flex justify-between py-1 text-sm">
                    <div>Movies/TvShows</div>
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
                    queryResult={queryResult}
                    setIsSearchBarOpen={setIsSearchBarOpen}
                />
            ) : (
                <div className="bg-neutral-800/50 text-center p-4">Results</div>
            )}
        </>
    );
}
