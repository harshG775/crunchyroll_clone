"use client"
// import SearchBar from "./topNavBarItems/SearchBar";
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";

import { useStore } from "@/store/StoreProvider";
import storeAction from "@/store/storeAction";
export default function TopNavbar() {
    const [state, dispatch] = useStore();
    console.log(state);
    const handleToggleSidebar = () => {
        dispatch({
            type: storeAction.TOGGLE_SIDEBAR,
            payload: !state.isSidebarOpen,
        });
    }
	return (
        <header className="
            z-40
            xl:pl-64 transition-[padding] duration-200
            bg-neutral-900
            sticky top-0
            ">
            <nav>
                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li className="p-2 grid place-items-center">
                        <button onClick={handleToggleSidebar}>
                            <I className="text-3xl" icon="material-symbols:menu" />
                        </button>
                    </li>
                    <li className="w-full"><Link href={"/"} className="text-2xl">CrunchesRoll</Link></li>
                    {/* <li className="ml-auto"><SearchBar /></li> */}
                    <li><UserProfileCard/></li>
                </ul>
            </nav>
        </header>
	);
}
