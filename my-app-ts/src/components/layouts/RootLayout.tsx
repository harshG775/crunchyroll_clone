"use client"
import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
import { useState } from "react";

type Props = Readonly<{children: React.ReactNode;}>;
export default function RootLayout({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <TopNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <SideNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <main
                className="
            z-0
            xl:pl-64 transition-[padding] duration-200
            bg-neutral-900
            "
            >
                {children}
            </main>
        </>
    );
}
