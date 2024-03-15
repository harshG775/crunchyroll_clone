import Link from "next/link";
import CardItem_image from "./CardItem_image";

export type Type_cardItemsData = {
    name: string;
    original_name: string;
    title: string;
    original_title: string;
    id: number;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
    media_type: string;
}
export default async function CardItem({data,media_type}:{data:Type_cardItemsData,media_type:string}) {
    const {name,original_name,title,original_title,vote_average,id,
        backdrop_path,poster_path}=data
    const titleT =(media_type === "tv") ? ( name ? name : original_name ):( title ? title : original_title );
	return (
		<Link className="grid gap-2" href={`/${media_type}/overview?id=${id}&title=${titleT}`}>
            <CardItem_image backdrop_path={backdrop_path} poster_path={poster_path} title={titleT}/>
            <div className="flex justify-between">
                <p>{vote_average}</p>
                <div>{media_type}</div>
            </div>
            <h2>{titleT}</h2>
		</Link>
	);
}