//App.jsx
import { useContext } from "react";
import Context_db from "../../store/Context_db";
import { Actions } from "../../store/Reducer_db";
import Movies from "../../components/pages/home/movies/Movies";
import CarouselHero from "../../components/pages/home/carouselHero/CarouselHero";

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
			<CarouselHero />
			<Movies />
		</div>
	);
}
