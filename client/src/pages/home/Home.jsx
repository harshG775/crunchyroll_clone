//App.jsx
import { useContext } from "react";
import Context_db from "../../store/Context_db";
import { Actions } from "../../store/Reducer_db";

import TMDB from "../../helper/TMDB";
import { useQuery } from "@tanstack/react-query";
import Section from "../../components/pages/section/Section";
function TrendingAll() {
	const { data:trendingAll } = useQuery({
		queryKey: ["trendingAll"],
		queryFn: () => TMDB.TrendingAll("day"),
	});
    return (
        <Section data={trendingAll?.data} title={"Trending All"} iconName={"game-icons:fox"}/>
    )
}
export default function Home() {
	const [state, dispatch] = useContext(Context_db);
	const handleClick = () => {
		dispatch({
			actionType: Actions.TOGGLE_MENU,
			payload: !state.isOpen,
		});
	};
	return (
		<div>
			<h1>App :{`${state.isOpen}`}</h1>
			<button className="bg-red-500" onClick={handleClick}>
				toggle
			</button>
			<TrendingAll />
		</div>
	);
}
