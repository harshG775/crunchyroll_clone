import axios from "axios";
const { TMDB_BASE_URL, TMDB_TOKEN } = process.env;
export const Axios_tmdb = axios.create({
    baseURL: TMDB_BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
    },
    timeout: 5000,
});
