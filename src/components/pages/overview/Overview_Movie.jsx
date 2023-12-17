import { useQuery } from "@tanstack/react-query";
import TMDB from "../../../helper/TMDB";
const movieUrl = import.meta.env.VITE_MOVIE_URL;

export default function Overview_Movie(props) {
	const { id } = props;
	const { data, isLoading,isError,error } = useQuery({
		queryKey: ["overview_movie", id],
		queryFn: () => TMDB.Details("movie", id),
	});
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
	return (
		<div>
			<h1>Movie</h1>
            {
                data.data && (
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${data.data.backdrop_path}`} alt="" />
                        <h5>{data.data.title}</h5>
                    </div>
                )
            }
            <div>
                
                <iframe
					width="560"
					height="315"
					src={movieUrl.replace("{id}", id)}
					title={data.data.title}
					frameBorder="0"
					allowfullscreen
				></iframe>
            </div>
		</div>
	);
}
