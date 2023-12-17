
import { useQuery } from "@tanstack/react-query";
import TMDB from "../../../helper/TMDB";

export default function Overview_TvShow(props) {
	const { id } = props;
	const { data, isLoading,isError,error } = useQuery({
		queryKey: ["overview_tvShow", id],
		queryFn: () => TMDB.Details("tv", id),
	});
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
	return (
		<div>
			<h1>Tv Show</h1>
            {
                data.data && (
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${data.data.backdrop_path}`} alt="" />
                        <h5>{data.data.name}</h5>
                    </div>
                )
            }
		</div>
	)
}