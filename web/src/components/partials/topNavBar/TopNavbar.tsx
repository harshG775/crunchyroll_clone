"use client"
import Link from "next/link";
import Icon from "@/components/icons/lucide";
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
            ${isSidebarOpen ? "xl:pl-64" : ""} transition-[padding] duration-300
            bg-background
            sticky w-full top-0
            `}>
            <nav className="relative">
                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li role="button" className={`${isSidebarOpen ? "w-[0rem]" : "w-12"}  overflow-hidden transition-[width] duration-200 grid place-items-center`} onClick={handleOpenSidebar}>
                        <Icon name="Menu" className="w-6 h-6 " />
                    </li>
                    <li className="w-full"><Link href={"/home"} className="text-2xl">CrunchesRoll</Link></li>
                    <li className="ml-auto"><SearchBar /></li>
                    <li><UserProfileCard/></li>
                </ul>
            </nav>
        </header>
	);
}
