import { cn } from "@/lib/utils";
import React from "react";
import ThemeHandler from "../ui/ThemeHandler";
import TanstackQuery from "@/lib/TanstackQuery";

type RootLayoutProps = {
    children: React.ReactNode;
    className?: string;
    theme: string;
};
export default function Layout({ theme, children, ...rest }: RootLayoutProps) {
    const { className } = rest;
    return (
        <html lang="en" color-scheme={theme}>
            <body
                {...rest}
                className={cn(
                    `min-h-screen bg-background font-sans antialiased ${theme}`,
                    className
                )}
            >
                {" "}
                <TanstackQuery>{children}</TanstackQuery>
                <ThemeHandler currentTheme={theme} />
            </body>
        </html>
    );
}
