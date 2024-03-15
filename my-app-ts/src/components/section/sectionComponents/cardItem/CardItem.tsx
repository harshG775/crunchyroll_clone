import Link from "next/link";
export default function CardItem({ media_type,name,original_name,title,original_title,id,vote_average}) {
	return (
		<Link className="grid gap-2" href={""}>
			
		</Link>
	);
}
// import Link from "next/link";
// import CardItem_image from "./CardItem_image";
// export default function CardItem({ data,media_type }) {
//     const { media_type,name,original_name,title,original_title,id,vote_average}=data
//     const titleT =(media_type === "tv") ? ( name ? name : original_name ):( title ? title : original_title );
// 	return (
// 		<Link className="grid gap-2" href={`/${media_type}/overview/${title.replace(/\s+/g, "-")}.=.${id}`}>
// 			<CardItem_image {...data} />
// 			<div className="flex justify-between">
// 				<p>{vote_average}</p>
// 				<div>{media_type || media_type}</div>
// 			</div>
// 			<h2>{titleT}</h2>
// 		</Link>
// 	);
// }
