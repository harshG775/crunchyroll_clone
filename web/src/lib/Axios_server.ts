import { envServer } from "@/utils/env/env.server";
import axios from "axios";
const { TMDB_BASE_URL, TMDB_TOKEN } = envServer;
export const Axios_tmdb = axios.create({
    baseURL: TMDB_BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
    },
    timeout: 5000,
});
