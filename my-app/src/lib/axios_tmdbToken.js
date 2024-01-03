import axios from "axios";
const TMDB_TOKEN = process.env.TMDB_TOKEN;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const axios_tmdbToken= axios.create({
	baseURL: TMDB_BASE_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Authorization:`Bearer ${TMDB_TOKEN}`,
	},
});
export default axios_tmdbToken

