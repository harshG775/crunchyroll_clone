"use client"
import SearchBar from "./topNavBarItems/SearchBar";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { I } from "@/components/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";
import { useContext } from "react";
import Context_db from "@/store/Context_db";
import {Actions} from "@/store/Reducer_db";
export default function TopNavbar({className}) {
    const [state,dispatch] = useContext(Context_db);
    const handleToggleSidebar = ()=>{
		dispatch({
			actionType: Actions.TOGGLE_SIDEBAR,
			payload: !state.isSidebarOpen,
		});
    }
	return (
		<nav className={twMerge(" ", className)}>
            <ul className="container mx-auto flex items-center gap-2 p-2">
                <li className="block md:hidden p-2">
                    <button onClick={handleToggleSidebar}>
                        <I className="text-2xl" icon="material-symbols:menu" />
                    </button>
                </li>
                <li><Link href={"/"} className="text-2xl">CrunchesRoll</Link></li>
                <li className="ml-auto"><SearchBar /></li>
                <li><UserProfileCard/></li>
            </ul>
		</nav>
	);
}
