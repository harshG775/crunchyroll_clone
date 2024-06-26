"use client"
import TopNavbar from "@/components/partials/topNavBar/TopNavbar";
import SideNavbar from "@/components/partials/sideNavBar/SideNavbar";
import { sidebarState } from "@/store/zustand/sidebarState";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const isSidebarOpen = sidebarState((state) => state.isOpen);
    return (
        <>
            <TopNavbar/>
            <SideNavbar/>
            <main
                className={`
            z-0
            ${isSidebarOpen ? "xl:pl-60" : "pl-0"} transition-[padding] duration-300
            
            `}
            >
                {children}
            </main>
        </>
    );
}
