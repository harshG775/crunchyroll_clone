const TMDB_BASE_URL="https://api.themoviedb.org/3"
const API_KEY="c04c4d588ea04e1542849e5b03feadc9"
import Axios from "axios";
const TMDB = {
	TrendingAll: (timePeriod = "day", page = 1,language = "en-US") => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/trending/all/${timePeriod}?language=${language}&api_key=${API_KEY}&page=${page}`,
		});
	},
	NowPlaying_Movies: ( page = 1,language = "en-US") => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/movie/now_playing?language=${language}&api_key=${API_KEY}&page=${page}`,
		});
	},
	Search: (query, page = 1) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
		});
	},
	SearchMulti: (query, page = 1,mediaType="multi",language = "en-US") => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${query}&page=${page}&language=${language}`,
		});
	},


	Details: (mediaType,id) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`,
		});
	},
	
	Cast: (id) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
		});
	},
	Video: (id) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
		});
	},
	Recommended: (id) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
		});
	},
	Similar: (id) => {
		return Axios({
			method: "get",
			url: `${TMDB_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
		});
	},
};
export default TMDB;
