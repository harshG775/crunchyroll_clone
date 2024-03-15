import CardItem_image from "./CardItem_image";

export type Type_resultsArray = {
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
import Link from "next/link";
export default function CardItem({data,media_type}:{data:Type_resultsArray,media_type:string}) {
    const {name,original_name,title,original_title,vote_average,
        backdrop_path,poster_path}=data
    const titleT =(media_type === "tv") ? ( name ? name : original_name ):( title ? title : original_title );
	return (
		<Link className="grid gap-2" href={""}>
            <CardItem_image backdrop_path={backdrop_path} poster_path={poster_path} title={title}/>
            <div className="flex justify-between">
                <p>{vote_average}</p>
                <div>{media_type}</div>
            </div>
            <h2>{titleT}</h2>
			
		</Link>
	);
}