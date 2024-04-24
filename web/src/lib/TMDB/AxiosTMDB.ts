import axios from "axios";
import { envClient } from "@/utils/env/env.client";
import { envServer } from "@/utils/env/env.server";

const { TMDB_BASE_URL, TMDB_TOKEN } = envServer;
const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_IFRAME_BASE_URL } = envClient;

export const AxiosServer = axios.create({
    baseURL: TMDB_BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${TMDB_TOKEN}`,
    },
    timeout: 5000,
});

export const AxiosClient = axios.create({
    baseURL: NEXT_PUBLIC_IFRAME_BASE_URL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
    params: {
        api_key: NEXT_PUBLIC_API_KEY,
    },
    timeout: 5000,
});
