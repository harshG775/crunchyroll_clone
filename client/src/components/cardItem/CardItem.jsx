import { Link } from "react-router-dom";
import CardItem_image from "./CardItem_image";

export default function CardItem(props) {
	const { data } = props;
    const title =(data.media_type === "tv") ? ( data.name ? data?.name : data.original_name ):( data.title ? data?.title : data?.original_title );
	return (
		<Link to={`/overview/${data?.media_type}/${data?.id}-${title.replace(/\s+/g, "-")}`}>
			<CardItem_image {...data} />
			<div className="flex justify-between">
				<p>{data.vote_average}</p>
				<div>{data.media_type}</div>
			</div>
			<h2>{title}</h2>
		</Link>
	);
}
