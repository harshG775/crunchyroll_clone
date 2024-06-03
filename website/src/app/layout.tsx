import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/RootLayout";
import { cookies } from "next/headers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Next-Js App template",
    description: "with TailwindCSS and ShadeCn theme",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
export default function RootLayout({ children }: RootLayoutProps) {
    const { get } = cookies();
    const theme = get("theme");
    return (
        <Layout className={fontSans.variable} theme={theme?.value || "light"}>
            {children}
        </Layout>
    );
}
