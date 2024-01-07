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

// import Axios from "axios";
// const TMDB = {
// 	TrendingAll: (timePeriod = "day", page = 1, language = "en-US") => {
// 		return axios_tmdb.get(
// 			`/trending/all/${timePeriod}?language=${language}&page=${page}`
// 		);
// 	},
// 	NowPlaying_Movies: (page = 1, language = "en-US") => {
// 		return axios_tmdb.get(
// 			`/movie/now_playing?language=${language}&api_key=${API_KEY}&page=${page}`
// 		);
// 	},
// 	Search: (query, page = 1) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
// 		});
// 	},
// 	SearchMulti: (query, page = 1, mediaType = "multi", language = "en-US") => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${query}&page=${page}&language=${language}`,
// 		});
// 	},

// 	Details: (mediaType, id) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`,
// 		});
// 	},

// 	Cast: (id) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
// 		});
// 	},
// 	Video: (id) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
// 		});
// 	},
// 	Recommended: (id) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
// 		});
// 	},
// 	Similar: (id) => {
// 		return Axios({
// 			method: "get",
// 			url: `${TMDB_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
// 		});
// 	},
// };
