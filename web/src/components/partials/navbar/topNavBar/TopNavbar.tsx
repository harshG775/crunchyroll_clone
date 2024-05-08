"use client"
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";
import SearchBar from "@/components/ui/searchBar/SearchBar";
import { sidebarState } from "@/store/zustand/sidebarState";

export default function TopNavbar() {
    const isSidebarOpen =sidebarState((state) => state.isOpen);
    const setIsSidebarOpen =sidebarState((state) => state.open);
    const handleOpenSidebar = () => {
        setIsSidebarOpen()
    }
	return (
        <header className={`
            z-40
            ${isSidebarOpen ? "xl:pl-64" : ""} transition-[padding] duration-200
            bg-background
            sticky w-full top-0
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
