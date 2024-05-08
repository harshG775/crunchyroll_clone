"use client";

import { sidebarState } from "@/store/zustand/sidebarState";
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
    const isSidebarOpen =sidebarState((state) => state.isOpen);
    const setIsSidebarClose =sidebarState((state) => state.close);
    const handleCloseSidebar = () => {
        setIsSidebarClose()
    }
	return (
        <>
            <aside className={`
                    z-50 fixed inset-y-0 left-0 w-64 bg-background
                    grid grid-rows-[auto,1fr]
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200
                `}>
                <div className="flex justify-between p-4">
                    <div>
                        <button onClick={handleCloseSidebar}>
                            <I className="text-3xl" icon="material-symbols:menu" />
                        </button>
                    </div>
                    <div>LOGO</div>
                </div>
                <nav className="overflow-y-auto scrollbar-thin">
                    <SidebarLinks linksData={SidebarLinksData} />
                    {/* user */}
                </nav>
            </aside>
            <div className={`fixed inset-0 bg-background/50 backdrop-blur z-40 xl:hidden ${isSidebarOpen?"":"  hidden "}`} onClick={handleCloseSidebar}></div>
        </>

	);
}
