import SearchBox from "../../searchBox/SearchBox";
import { Link } from "react-router-dom";
export default function TopNavbar() {
	return (
		<nav className="flex justify-between">
			<Link to={"/"}>LOGO</Link>
			<SearchBox />
		</nav>
	);
}
