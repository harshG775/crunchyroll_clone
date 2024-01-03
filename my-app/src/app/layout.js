import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/pageLayout/navbar/topNavBar/TopNavbar";
import SideNavbar from "@/components/pageLayout/navbar/sideNavBar/SideNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "crunchyroll_clone",
	description: "crunchyroll clone home page",
};

import ContextProvider_db from "@/store/ContextProvider_db";
export default function RootLayout({ children }) {
	return (
		<ContextProvider_db>
			<html lang="en">
				<body className={inter.className}>
                    <TopNavbar />
                    <SideNavbar />
                    <main>{children}</main>
                    <footer>footer</footer>
				</body>
			</html>
		</ContextProvider_db>
	);
}
