import axios_tmdb from "@/lib/axios_tmdb";
import axios_tmdbToken from "@/lib/axios_tmdbToken";
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
	static MultiSearch(page = 1,params) {
        const {with_genres,include_adult,language,media_type,query} = params;

        let apiUrl = `/${media_type}/search?page=${page}`;
		if (query.length > 0) apiUrl += `&query=${query.join(",")}`;

		if (with_genres.length > 0) apiUrl += `&with_genres=${with_genres.join(",")}`;

		if (include_adult.length > 0) apiUrl += `&include_adult=${include_adult.join(",")}`;
		
		if (language.length > 0) apiUrl += `&language=${language.join(",")}`;
		
		// if (years.length > 0) apiUrl += `&years=${years.join(",")}`;
		

		return axios_tmdb.get(apiUrl);
	}
    static GetGenres(media_type,params) {
        const { language } = params;
        return axios_tmdb.get(`/genre/${media_type}/list?language=${language}`);
    }
}