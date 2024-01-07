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
	static DetailsById(mediaType, mediaId, language = "en-US") {
		return axios_tmdb.get(
			`/${mediaType}/${mediaId}?language=${language}`
		);
	}
	static MultiSearch(query, page = 1, mediaType, params) {
		const { genres, countries, season, type, years, rating, language} = params;
		let apiUrl = `/${mediaType}/search?language=${language}&query=${query}&page=${page}`;
		if (genres.length > 0) apiUrl += `&genres=${genres.join(",")}`;
		
		if (countries.length > 0) apiUrl += `&countries=${countries.join(",")}`;
		
		if (season.length > 0) apiUrl += `&season=${season.join(",")}`;
		
		if (type.length > 0) apiUrl += `&type=${type.join(",")}`;
		
		if (years.length > 0) apiUrl += `&years=${years.join(",")}`;
		
		if (rating.length > 0) apiUrl += `&rating=${rating.join(",")}`;
		

		return axios_tmdb.get(apiUrl);
	}
    static GetGenres(media_type,params) {
        const { language } = params;
        return axios_tmdb.get(`/genre/${media_type}/list?language=${language}`);
    }
}