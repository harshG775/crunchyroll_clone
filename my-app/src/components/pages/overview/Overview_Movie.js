import TMDB from "../../../helper/TMDB";
const MOVIE_BASE_URL_TO = "https://vidsrc.to/embed/movie/{id}";
import Iframe from "../../player/Iframe";
import Image from "next/image";
export default async function Overview_Movie(props) {
	const { id } = props;
	const data = TMDB.Details("movie", id);

	return (
		<div>
			<h1>Movie</h1>
			{data.data && (
				<div>
					<Image
                        width={500}
                        height={500}
						src={`https://image.tmdb.org/t/p/w500/${data.data.backdrop_path}`}
						alt=""
					/>
					<h5>{data.data.title}</h5>
				</div>
			)}
			<div>
				<Iframe
					key={id}
					src={MOVIE_BASE_URL_TO.replace("{id}", id)}
					title={data.data.title}
				/>
			</div>
		</div>
	);
}
