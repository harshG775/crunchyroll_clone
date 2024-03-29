"use client"
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";
import { Type_sidebarSate } from "@/components/layouts/RootLayout";
import SearchBar from "@/components/ui/searchBar/SearchBar";

export default function TopNavbar(props:Type_sidebarSate) {
    const { isSidebarOpen, setIsSidebarOpen } = props;
    const handleOpenSidebar = () => {
        setIsSidebarOpen(true)
    }
	return (
        <header className={`
            z-40
            ${isSidebarOpen ? "xl:pl-64" : ""} transition-[padding] duration-200
            bg-neutral-900
            sticky top-0
            `}>
            <nav className="relative">
                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li className="p-2 grid place-items-center">
                        <button className={isSidebarOpen ? "opacity-0" : "opacity-100"} onClick={handleOpenSidebar}>
                            <I className="text-3xl" icon="material-symbols:menu" />
                        </button>
                    </li>
                    <li className="w-full"><Link href={"/"} className="text-2xl">CrunchesRoll</Link></li>
                    <li className="ml-auto"><SearchBar /></li>
                    <li><UserProfileCard/></li>
                </ul>
            </nav>
        </header>
	);
}
