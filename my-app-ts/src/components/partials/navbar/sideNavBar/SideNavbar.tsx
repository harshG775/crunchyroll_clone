"use client";

import { useState } from "react";
import SidebarLinks from "./sidebar/SidebarLinks";
import { I } from "@/components/icons/iconify/I";

const SidebarLinksData = [
	{
        linkTo: "/home",
		title: "home",
        iconName: "ic:baseline-home",
	},
	{
        linkTo: "/tv",
		title: "Tv Shows",
        iconName: "ic:baseline-home",
	},
	{
        linkTo: "/movie",
		title: "Movies",
        iconName: "ic:baseline-home",
	},
];
export default function SideNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleCloseSidebar = ()=>{
        setIsSidebarOpen(false);
    }
	return (
        <>
            <aside className="
                    z-50 fixed inset-y-0 left-0 w-64 bg-neutral-900
                    grid grid-rows-[auto,1fr]
                    xl:translate-x-[0%] -translate-x-full transition-transform duration-200
                ">
                <div className="flex justify-between p-4">
                    <div>
                        <button>
                            <I className="text-3xl" icon="material-symbols:menu" />
                        </button>
                    </div>
                    <div>LOGO</div>
                </div>
                <nav className="
                    hover:overflow-y-scroll scrollbar-thin
                ">
                    <SidebarLinks linksData={SidebarLinksData} />
                    {/* user */}
                </nav>
            </aside>
            <div className={`sidebar-backdrop ${isSidebarOpen?"":" hidden "}`} onClick={handleCloseSidebar}></div>
        </>

	);
}