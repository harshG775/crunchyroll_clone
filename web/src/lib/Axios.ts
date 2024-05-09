import { envClient } from "@/utils/env/env.client";
import axios from "axios";
const { NEXT_PUBLIC_TMDB_BASE_URL,NEXT_PUBLIC_API_KEY } = envClient;
export const Axios_tmdb = axios.create({
    baseURL: NEXT_PUBLIC_TMDB_BASE_URL,
    params: {
        api_key: NEXT_PUBLIC_API_KEY,
    },
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
    },
    timeout: 5000,
});
