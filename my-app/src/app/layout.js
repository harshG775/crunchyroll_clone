import { Inter } from "next/font/google";
import { Suspense } from "react";
import TopNavbar from "@/components/pageLayout/navbar/topNavBar/TopNavbar";
import SideNavbar from "@/components/pageLayout/navbar/sideNavBar/SideNavbar";
import Footer from "@/components/pageLayout/footer/Footer";
import ContextProvider_db from "@/store/ContextProvider_db";
import PageLoader from "@/components/loaders/pageLoader/PageLoader";

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
				<body className={inter.className}>
					<TopNavbar />
					<SideNavbar />
					<Suspense fallback={<PageLoader />}>
						<main>{children}</main>
					</Suspense>
					<Footer />
				</body>
			</html>
		</ContextProvider_db>
	);
}
