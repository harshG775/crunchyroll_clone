import { envClient } from "@/utils/env/env.client";
import axios from "axios";
const { NEXT_PUBLIC_TMDB_BASE_URL, NEXT_PUBLIC_API_KEY } = envClient;
export const Axios_tmdb = axios.create({
    baseURL: NEXT_PUBLIC_TMDB_BASE_URL,
    params: {
        api_key: NEXT_PUBLIC_API_KEY,
    },
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
    timeout: 5000,
});

type mediaType = "all" | "movie" | "tv" | "person";

type TrendingPropsType = {
    mediaType: mediaType;
    time_window?: "day" | "week";
};
export function getTrending({ mediaType,time_window = "day" }: TrendingPropsType) {
    return Axios_tmdb.get(
        `/trending/${mediaType}/${time_window}?language=en-US`
    );
}

type TopRatedPropsType = {
    mediaType: mediaType;
    time_window?: "day" | "week";
};
export function getTopRated({ mediaType }: TopRatedPropsType) {
    return Axios_tmdb.get(
        `/${mediaType}/top_rated?language=en-US&region=IN&page=1`
    );
}

type InfoPropsType = {
    mediaType: mediaType;
    id: string;
};
export function getInfoById({ mediaType ,id  }: InfoPropsType) {
    return Axios_tmdb.get(`/${mediaType}/${id}?language=en-US`);
}
