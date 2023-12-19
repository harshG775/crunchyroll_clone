import { useQuery } from "@tanstack/react-query";
import TMDB from "../../../helper/TMDB";
import { useState } from "react";

const tvShowUrl = import.meta.env.VITE_TV_URL_TO;

export default function Overview_TvShow(props) {
	const { id } = props;
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["overview_tvShow", id],
		queryFn: () => TMDB.Details("tv", id),
	});
	const [currentSeason, setCurrentSeason] = useState(0);
	const [currentEpisode, setCurrentEpisode] = useState(0);

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
						<iframe
							width="560"
							height="315"
							src={tvShowUrl
								.replace("{id}", id)
								.replace("{season}", currentSeason)
								.replace("{episode}", currentEpisode)}
							title={data.data.name}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
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
									className={`${
										key === currentSeason
											? " bg-slate-400 text-neutral-50"
											: ""
									}`}
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
									className={`${
										episode === currentEpisode
											? " bg-slate-400 text-neutral-50"
											: ""
									}`}
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
