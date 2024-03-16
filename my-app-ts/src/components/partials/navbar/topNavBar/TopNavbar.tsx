"use client"
import SearchBar from "./topNavBarItems/SearchBar";
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";
export default function TopNavbar() {
	return (
        <header className="
            z-40
            xl:pl-64 transition-[padding] duration-200
            ">
            <nav>
                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li className="p-2 grid place-items-center">
                        <button>
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
