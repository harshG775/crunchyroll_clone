import axios from "axios";
const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const axios_tmdb = axios.create({
	baseURL: TMDB_BASE_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
	params: {
		api_key: TMDB_API_KEY,
	},
});

export default axios_tmdb;
