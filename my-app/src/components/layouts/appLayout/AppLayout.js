import "./appLayout.css";
import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
import Footer from "@/components/partials/footer/Footer";
export default function AppLayout({ children }) {
	return (
		<>
			<TopNavbar className={"app-top-navbar"} />
			{/* <SideNavbar className={"app-side-navbar"}/> */}
			<main className={"app-main"}>{children}</main>
			<Footer className={"app-footer"} />
		</>
	);
}
