import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "movix",
    description: "movix",
};

import Layout from "@/components/layouts/RootLayout";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Layout>{children}</Layout>;
}
