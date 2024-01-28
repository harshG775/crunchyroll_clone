import "./appLayout.css";
import TopNavbar from "@/components/partials/navbar/topNavBar/TopNavbar";
import SideNavbar from "@/components/partials/navbar/sideNavBar/SideNavbar";
import Footer from "@/components/partials/footer/Footer";
export default function AppLayout(props) {
    const { children,className } = props;
	return (
		<body className={`${className} body-wrapper`}>
			<TopNavbar className={"app-top-navbar"} />
            <SideNavbar className={"app-side-navbar"}/>
            <main className={"app-main xl:pl-0 md:pl-20"}>{children}</main>
            <Footer className={"app-footer"} />
		</body>
	);
}
