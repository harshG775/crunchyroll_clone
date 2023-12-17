const API_KEY = import.meta.env.VITE_API_KEY;
import Axios from "axios";
const TMDB = {
	TrendingAll: (timePeriod = "day", page = 1) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/trending/all/${timePeriod}?api_key=${API_KEY}&page=${page}`,
		});
	},
	Search: (query, page = 1) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`,
		});
	},
	Details: (mediaType,id) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}`,
		});
	},
	
	Cast: (id) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
		});
	},
	Video: (id) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
		});
	},
	Recommended: (id) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`,
		});
	},
	Similar: (id) => {
		return Axios({
			method: "get",
			url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`,
		});
	},
};
export default TMDB;
