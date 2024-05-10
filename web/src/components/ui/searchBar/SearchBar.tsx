"use client";
import { useState } from "react";
import SearchBarForm from "./SearchBarForm";
import Icon from "@/components/icons/lucide";

export default function SearchBar() {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    return(
        <div>
            <button onClick={() => setIsSearchBarOpen(!isSearchBarOpen)} className="transition-colors duration-300 text-neutral-100 p-2 text-xl rounded-full outline outline-2 outline-gray-100 bg-gray-800 hover:bg-gray-100 hover:text-neutral-800 hover:outline-slate-900 " type="submit">
                <Icon name="Search" className="w-6 h-6"/>
            </button>
            <div className={` ${isSearchBarOpen ? "block" : "hidden" } absolute top-14 left-0 right-0 bg-neutral-900 text-neutral-50`}>
                <SearchBarForm setIsSearchBarOpen={setIsSearchBarOpen}/>
            </div>
        </div>
    )
}
