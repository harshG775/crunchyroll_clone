"use client"
import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
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
            ${isSidebarOpen ? "xl:pl-64" : "pl-0"} transition-[padding] duration-200
            
            `}
            >
                {children}
            </main>
        </>
    );
}
