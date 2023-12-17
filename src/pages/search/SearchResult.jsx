import { useParams } from "react-router-dom";
import TMDB from "../../helper/TMDB";
import { useQuery } from "@tanstack/react-query";
import CardItem from "../../components/cardItem/CardItem";
export default function SearchResult() {
	const url = useParams();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["searchMulti",url.query],
		queryFn: () => TMDB.SearchMulti(url.query, 1),
	});
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>{error.message}</div>;
	}
    console.log(data)
    console.log(url.query)
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
