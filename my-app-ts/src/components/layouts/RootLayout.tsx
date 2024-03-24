"use client"
import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
import React, { useState } from "react";

export type Type_sidebarSate = {
    isSidebarOpen: boolean,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
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
