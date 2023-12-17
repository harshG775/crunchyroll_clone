import SearchBox from "../../searchBox/SearchBox";
export default function TopNavbar() {
	return (
		<nav className="flex justify-between">
			<div>LOGO</div>
			<SearchBox />
		</nav>
	);
}
