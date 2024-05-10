"use client";

import { sidebarState } from "@/store/zustand/sidebarState";
import SidebarLinks from "./sidebar/SidebarLinks";
import Icon from "@/components/icons/lucide";
import Link from "next/link";
const SidebarLinksData = [
	{
        linkTo: "/home",
		title: "home",
        iconName: "Home",
	},
	{
        linkTo: "/tv",
		title: "Tv Shows",
        iconName: "Home",
	},
	{
        linkTo: "/movie",
		title: "Movies",
        iconName: "Home",
	},
];
export default function SideNavbar() {
    const isSidebarOpen =sidebarState((state) => state.isOpen);
    const setIsSidebarClose =sidebarState((state) => state.close);
    const handleCloseSidebar = () => {
        setIsSidebarClose()
    }
	return (
        <>
            <aside className={`
                    z-50 fixed inset-y-0 left-0 sm:w-60 w-full bg-background
                    grid grid-rows-[auto,1fr]
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300
                `}>

                <ul className="w-full mx-auto flex items-center gap-2 p-2">
                    <li role="button" className={`${isSidebarOpen ? "w-12" : "w-[0rem] "}  overflow-hidden transition-[width] duration-200 grid place-items-center`} onClick={handleCloseSidebar}>
                        <Icon name="Menu" className="w-6 h-6 " />
                    </li>
                    <li className={`w-full xl:collapse visible`}><Link href={"/home"} className="text-2xl">CrunchesRoll</Link></li>
                </ul>
                {/* <div className="flex justify-between p-4">
                    <div>
                        <button onClick={handleCloseSidebar}>
                            <Icon name="Menu" className="text-3xl"/>
                        </button>
                    </div>
                    <div className="visible lg:collapse w-full"><Link href={"/home"} className="text-2xl">CrunchesRoll</Link></div>
                </div> */}
                <nav className="overflow-y-auto scrollbar-thin">
                    <SidebarLinks linksData={SidebarLinksData} />
                    {/* user */}
                </nav>
            </aside>
            <div className={`fixed inset-0 bg-background/50 backdrop-blur z-40 xl:hidden ${isSidebarOpen?"":"  hidden "}`} onClick={handleCloseSidebar}></div>
        </>

	);
}
