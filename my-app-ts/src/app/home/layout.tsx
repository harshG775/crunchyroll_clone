// import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
// import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
    // return (
    //     <>
    //         <TopNavbar/>
    //         <SideNavbar/>
    //         <main className="
    //         z-0
    //         xl:pl-64 transition-[padding] duration-200
    //         bg-neutral-900
    //         ">{children}</main>
    //     </>
    // );
}
