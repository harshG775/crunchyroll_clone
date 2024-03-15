import axios from "axios";
const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const TMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const TMDB_TOKEN = process.env.TMDB_TOKEN;
const axios_tmdbToken = axios.create({
	baseURL: TMDB_BASE_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${TMDB_TOKEN}`,
	},
	params: {
		api_key: TMDB_API_KEY,
	},
});

export default axios_tmdbToken;
