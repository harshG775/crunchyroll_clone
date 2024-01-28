import SearchBox from "../../searchBox/SearchBox";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {Icon} from"@iconify/react";

 
function UserIcon() {
	const token = localStorage.getItem("token");
	return (
		<div className="flex gap-2 px-2">
			{!token ? (
				<>
					<Link className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold" to={"/sign-up"}>SignUp</Link>
				</>
			) : (
				<Icon icon="mingcute:user-4-fill" />
			)}
		</div>
	);
}

export default function TopNavbar({className}) {
	return (
		<nav className={twMerge("", className)}>
            <ul className="flex items-center gap-2 p-2">
                <li className="block md:hidden p-2"><Icon className="text-2xl" icon="material-symbols:menu" /></li>
                <li><Link to={"/"} className="text-2xl">CrunchesRoll</Link></li>
                <li className="ml-auto"><SearchBox /></li>
                <li><UserIcon/></li>
            </ul>
		</nav>
	);
}
