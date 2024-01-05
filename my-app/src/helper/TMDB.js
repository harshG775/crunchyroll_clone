import axios_tmdbToken from "../lib/axios_tmdbToken";
const API_KEY = process.env.API_KEY;
export default class TMDB {
    static TrendingAll (timePeriod = "day", page = 1, language = "en-US") {
		return axios_tmdbToken.get(
			`/trending/all/${timePeriod}?language=${language}&api_key=${API_KEY}&page=${page}`
		);
	}
    static 	NowPlaying_Movies (page = 1, language = "en-US"){
		return axios_tmdbToken.get(
			`/movie/now_playing?language=${language}&api_key=${API_KEY}&page=${page}`
		);
	}
    static DetailsById (mediaType, mediaId, language = "en-US") {
        return axios_tmdbToken.get(
            `/${mediaType}/${mediaId}?language=${language}&api_key=${API_KEY}`
        );
    }
}

// import Axios from "axios";
// const TMDB = {
// 	TrendingAll: (timePeriod = "day", page = 1, language = "en-US") => {
// 		return axios_tmdbToken.get(
// 			`/trending/all/${timePeriod}?language=${language}&page=${page}`
// 		);
// 	},
// 	NowPlaying_Movies: (page = 1, language = "en-US") => {
// 		return axios_tmdbToken.get(
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

