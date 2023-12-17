import { Link } from "react-router-dom"

export default function CardItem(props) {
    const { data } = props
    return (
    <Link to={`overview/${data.media_type}/${data.id}`}>
        <img
            className=" rounded-lg overflow-hidden"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title}
        />
        <p>{data.vote_average}</p>
        {data.media_type === "tv" ? (
            <h5>{data.name ? data?.name : data.original_name}</h5>) : (
            <h5>{data.title? data?.title: data?.original_title}</h5>
        )}
    </Link>
    )
}
