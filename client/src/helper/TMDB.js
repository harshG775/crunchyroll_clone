const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
import Axios from "axios";
const TMDB = {
	TrendingAll: (timePeriod = "day", page = 1) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/trending/all/${timePeriod}?api_key=${API_KEY}&page=${page}`,
		});
	},
	Search: (query, page = 1) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
		});
	},
	SearchMulti: (query, page = 1) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`,
		});
	},
	Details: (mediaType,id) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}`,
		});
	},
	
	Cast: (id) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
		});
	},
	Video: (id) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
		});
	},
	Recommended: (id) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
		});
	},
	Similar: (id) => {
		return Axios({
			method: "get",
			url: `${VITE_TMDB_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
		});
	},
};
export default TMDB;
