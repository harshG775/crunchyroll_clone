"use client";
import { I } from "@/components/iconify/I";
import { useState } from "react";
import { useRouter } from 'next/navigation'
function SearchBarForm() {
	const [QInput, setQInput] = useState("");
	const router = useRouter();

	const searchSubmitHandle = (e) => {
		e.preventDefault();
		if (QInput.trim() !== "") {
			router.push(`search/q/${QInput.replace(" ", "+").toLowerCase()}`);
		} else {
			console.log("Input is empty. Search not allowed.");
		}
		setQInput("");
	};
	return (
        <div className="bg-neutral-900 text-neutral-50">
            <form className="relative grid gap-2 p-2 border-b-2 border-neutral-50/10" action="/" onSubmit={searchSubmitHandle}>
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

                    <button className="absolute right-4 text-neutral-950 bg-neutral-50 p-2 text-xl rounded " type="submit">
                        <I icon="material-symbols:search" />
                    </button>
                </div>
                <div className="flex justify-between">
                    <ul className="flex gap-2">
                        <li>
                            <button>Movie</button>
                        </li>
                        <li>
                            <button>Tv Show</button>
                        </li>
                        <li>
                            <button>Anime</button>
                        </li>
                    </ul>
                    <div>Filter</div>
                </div>
            </form>
            <div className="bg-neutral-800/50 text-center p-4">
                <p >Result</p>
            </div>
        </div>
	);
}
export default function SearchBar() {
    return(
        <div>
            <button className="transition-colors duration-300 text-neutral-100 p-2 text-xl rounded-full outline outline-2 outline-gray-100 bg-gray-800 hover:bg-gray-100 hover:text-neutral-800 hover:outline-slate-900 " type="submit">
                <I icon="material-symbols:search" />
            </button>
            <div className="absolute top-14 left-0 right-0">
                <SearchBarForm/>
            </div>
        </div>
    )
}