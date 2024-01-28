import { Inter } from "next/font/google";
import { Suspense } from "react";
import ContextProvider_db from "@/store/ContextProvider_db";
import PageLoader from "@/components/loaders/pageLoader/PageLoader";
import AppLayout from "@/components/layouts/appLayout/AppLayout";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "crunchyroll_clone",
	description: "crunchyroll clone home page",
};

export default function RootLayout({ children }) {
	return (
		<ContextProvider_db>
			<html lang="en">
                <AppLayout className={`${inter.className}`}>
                    <Suspense fallback={<PageLoader />}>
                        {children}
                    </Suspense>
                </AppLayout>
			</html>
		</ContextProvider_db>
	);
}
