import { useQuery } from "@tanstack/react-query";
import TMDB from "../../../helper/TMDB";
import { useState } from "react";

const VITE_TV_BASE_URL_TO = import.meta.env.VITE_TV_BASE_URL_TO;
import Iframe from "../../player/Iframe";
export default function Overview_TvShow(props) {
	const { id } = props;
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["overview_tvShow", id],
		queryFn: () => TMDB.Details("tv", id),
	});
	const [currentSeason, setCurrentSeason] = useState(0);
	const [currentEpisode, setCurrentEpisode] = useState(1);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>{error.message}</div>;
	}
	return (
		<div>
			<h1>Tv Show</h1>
			{data.data && (
				<div>
					<img
						src={`https://image.tmdb.org/t/p/w500/${data.data.backdrop_path}`}
						alt=""
					/>
					<h5>{data.data.name}</h5>
					<div>
						<div>player</div>
						<Iframe
                            key={currentEpisode+currentSeason}
							src={VITE_TV_BASE_URL_TO
								.replace("{id}", id)
								.replace("{season}", currentSeason)
								.replace("{episode}", currentEpisode)}
							title={data.data.name}
						/>
					</div>
					<div>
						<div>seasons</div>
						<ul>
							{data.data.seasons.map((season,key) => (
								<li
									onClick={() => {
										setCurrentSeason(key);
										setCurrentEpisode(1);
									}}
									className={`cursor-pointer ${ key === currentSeason ? " bg-slate-400 text-neutral-50" : "" }`}
									key={key}
								>
									{key+1}
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>episodes</div>
						<ul>
							{Array.from(
								{ length: data.data.seasons[currentSeason].episode_count },
								(_, i) => i + 1
							).map((episode) => (
								<li
									onClick={() => {
										setCurrentEpisode(episode);
									}}
									className={` cursor-pointer ${ episode === currentEpisode ? " bg-slate-400 text-neutral-50" : "" }`}
									key={episode}
								>
									{episode} episode
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
