import { Link } from "react-router-dom";
import CardItem_image from "./CardItem_image";

export default function CardItem(props) {
	const { data } = props;
	return (
		<Link to={`/overview/${data?.media_type}/${data?.id}`}>
			<CardItem_image {...data} />
			<div className="flex justify-between">
				<p>{data.vote_average}</p>
				<div>{data.media_type}</div>
			</div>
			{data.media_type === "tv" ? (
				<h5>{data.name ? data?.name : data.original_name}</h5>
			) : (
				<h5>{data.title ? data?.title : data?.original_title}</h5>
			)}
		</Link>
	);
}
