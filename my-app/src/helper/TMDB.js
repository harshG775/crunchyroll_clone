import axios_tmdb from "@/lib/axios_tmdb";
import axios_tmdbToken from "@/lib/axios_tmdbToken";
function objectToQueryParams(obj) {
    return Object.keys(obj)
        .filter(key => obj[key] !== "") // Exclude keys with empty values
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');
}
export default class TMDB {
	static TrendingAll(timePeriod = "day", page = 1, language = "en-US") {
		return axios_tmdb.get(
			`/trending/all/${timePeriod}?language=${language}&page=${page}`
		);
	}
	/*movies*/
	static NowPlaying_Movies(page = 1, language = "en-US") {
		return axios_tmdb.get(
			`/movie/now_playing?language=${language}&page=${page}`
		);
	}
	/*Tv show*/
	static TrendingTvShows(timePeriod = "day", page = 1, language = "en-US") {
		return axios_tmdb.get(
			`/trending/tv/${timePeriod}?language=${language}&page=${page}`
		);
	}
	static DetailsById(media_type, mediaId, language = "en-US") {
		return axios_tmdb.get(
			`/${media_type}/${mediaId}?language=${language}`
		);
	}
	static MultiSearch(media_type="multi",page = 1,params) {
        const url = `/search/${media_type}?${objectToQueryParams(params)}&page=${page}`
		return axios_tmdb.get(url);
	}
    static GetGenres(media_type,params) {
        const { language } = params;
        return axios_tmdb.get(`/genre/${media_type}/list?language=${language}`);
    }
}