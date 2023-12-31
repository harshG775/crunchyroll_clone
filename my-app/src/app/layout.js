import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/pagelayout/navbar/TopNavbar";
import SideNavbar from "@/components/pagelayout/navbar/SideNavbar";
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
					<div className="dashboard-wrapper">
						<header className="dashboard-top-navbar">
							<TopNavbar />
						</header>
						<section>
							<SideNavbar />
						</section>
						<div className="dashboard-main-body bg-neutral-900 text-neutral-50  grid grid-rows-[1fr_auto]">
							<main>{children}</main>
							<footer>footer</footer>
						</div>
					</div>
				</body>
			</html>
		</ContextProvider_db>
	);
}
