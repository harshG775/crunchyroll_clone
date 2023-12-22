import { useParams } from "react-router-dom";
import Overview_Movie from "../../components/pages/overview/Overview_Movie";
import Overview_TvShow from "../../components/pages/overview/Overview_TvShow";
export default function Overview() {
	const { media_type, id } = useParams();
	switch (media_type) {
		case "movie":
			return <Overview_Movie id={id} />;
		case "tv":
			return <Overview_TvShow id={id} />;
		default:
			break;
	}
}
