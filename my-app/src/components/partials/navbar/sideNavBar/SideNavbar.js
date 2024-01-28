import { twMerge } from "tailwind-merge";
import Link from "next/link";
export default function SideNavbar({className}) {
    return (
        <nav className={twMerge("app-side-navbar", className)}>
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
