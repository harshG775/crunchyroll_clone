import { envServer } from "@/utils/env/env.server";
import axios from "axios";
const { TMDB_BASE_URL, TMDB_TOKEN, TMDB_API_KEY } = envServer;
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
