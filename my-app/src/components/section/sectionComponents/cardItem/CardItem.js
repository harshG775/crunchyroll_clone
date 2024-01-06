import Link from "next/link";
import CardItem_image from "./CardItem_image";

export default function CardItem(props) {
	const { data,media_type } = props;
    const title =(data.media_type === "tv") ? ( data.name ? data?.name : data.original_name ):( data.title ? data?.title : data?.original_title );
	return (
		<Link href={`/${media_type}/overview/${title.replace(/\s+/g, "-")}.=.${data.id}`}>
			<CardItem_image {...data} />
			<div className="flex justify-between">
				<p>{data.vote_average}</p>
				<div>{data.media_type}</div>
			</div>
			<h2>{title}</h2>
		</Link>
	);
}
