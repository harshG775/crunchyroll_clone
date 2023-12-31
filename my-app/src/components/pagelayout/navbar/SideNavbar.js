"use client";
import { twMerge } from "tailwind-merge";
import {Icon} from"@iconify/react";
export default function SideNavbar({className}) {
    return (
        <nav className={twMerge("flex justify-between bg-slate-800 p-4", className)}>
            <Icon icon="mingcute:menu-fill" />
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tv">Tv</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}
