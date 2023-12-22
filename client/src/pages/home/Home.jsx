//App.jsx
import { useContext } from "react";
import Context_db from "../../store/Context_db";
import { Actions } from "../../store/Reducer_db";

import TMDB from "../../helper/TMDB";
import { useQuery } from "@tanstack/react-query";
import CardItem from "../../components/cardItem/CardItem";
function TrendingAll() {
	const { data } = useQuery({
		queryKey: ["trendingAll"],
		queryFn: () => TMDB.TrendingAll("day"),
	});
	return (
		<ul className="container mx-auto grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
			{data?.data?.results?.map((item) => (
				<li key={item.id}>
					<CardItem data={item} />
				</li>
			))}
		</ul>
	);
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
