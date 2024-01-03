"use client";
import SearchBox from "../../../searchBox/SearchBox";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import {Icon} from"@iconify/react";

import clientStorage from "@/lib/clientStorage";
function UserIcon() {
	const token = clientStorage.getItem("token");
	return (
		<div className="flex gap-2 px-2">
			{!token ? (
				<>
					<Link className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold" href={"/sign-up"}>SignUp</Link>
				</>
			) : (
				<Icon icon="mingcute:user-4-fill" />
			)}
		</div>
	);
}

export default function TopNavbar({className}) {
	return (
		<nav className={twMerge("", className)}>
            <ul className="flex items-center gap-2 p-2">
                <li className="block md:hidden p-2"><Icon className="text-2xl" icon="material-symbols:menu" /></li>
                <li><Link href={"/"} className="text-2xl">CrunchesRoll</Link></li>
                <li className="ml-auto"><SearchBox /></li>
                <li><UserIcon/></li>
            </ul>
		</nav>
	);
}
