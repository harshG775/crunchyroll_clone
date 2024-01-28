import SearchBar from "./topNavBarItems/SearchBar";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { I } from "@/components/iconify/I";
import UserProfileCard from "./topNavBarItems/UserProfileCard";

export default function TopNavbar({className}) {
	return (
		<nav className={twMerge("relative", className)}>
            <ul className="container mx-auto flex items-center gap-2 p-2">
                <li className="block md:hidden p-2"><I className="text-2xl" icon="material-symbols:menu" /></li>
                <li><Link href={"/"} className="text-2xl">CrunchesRoll</Link></li>
                <li className="ml-auto"><SearchBar /></li>
                <li><UserProfileCard/></li>
            </ul>
		</nav>
	);
}
