import SearchBox from "../../searchBox/SearchBox";
import { Link } from "react-router-dom";
export default function TopNavbar() {
	return (
		<nav className="flex justify-between">
			<Link to={"/"}>LOGO</Link>
			<SearchBox />
			<div>
				<Link to={"/login"}>Login</Link>
				<Link to={"/sign-up"}>Sign Up</Link>
			</div>
		</nav>
	);
}
