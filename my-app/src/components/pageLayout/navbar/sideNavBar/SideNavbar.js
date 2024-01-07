import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { I } from "@/components/iconify/I";
export default function SideNavbar({className}) {
    return (
        <nav className={twMerge("flex justify-between bg-slate-800 p-4", className)}>
            <I icon="mingcute:menu-fill" />
            <ul>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/movies">Movies</Link></li>
                <li><Link href="/tv">Tv</Link></li>
                <li><Link href="/search">Search</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}
