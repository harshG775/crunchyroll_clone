import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackQuery from "@/lib/TanstackQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" id="dark">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={`${inter.className} bg-background scrollbar-thin`}>
                <div className="scrollbar-color h-dvh overflow-auto">
                    <TanstackQuery>{children}</TanstackQuery>
                </div>
            </body>
        </html>
    );
}
