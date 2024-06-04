import { envClient } from "@/utils/env/env.client";

export type MovieProps = {
    domain: string;
    title: string;
    id: number;
};

const { NEXT_PUBLIC_IFRAME_BASE_URL } = envClient;

export function Iframe_movie({ domain, title, id }: MovieProps) {
    const baseUrl = NEXT_PUBLIC_IFRAME_BASE_URL.replace("{domain}",domain)
        .replace("{mediaType}","movie").replace("{id}", id + "");
        console.log(baseUrl)
    return (
        <iframe
            key={id}
            className="aspect-video w-full rounded-lg"
            src={baseUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="origin"
            allowFullScreen
        ></iframe>
    );
}

export type TvProps = {
    domain: string;
    title: string;
    id: number;
    season: number;
    episode: number;
};
export function Iframe_tv({ domain, title, id, season, episode }: TvProps) {
    const baseUrl = NEXT_PUBLIC_IFRAME_BASE_URL.replace("{domain}", domain)
        .replace("{mediaType}","tv").replace("{id}", id + "")
    return (
        <iframe
            key={id+season+episode}
            className="aspect-video w-full rounded-lg"
            src={`${baseUrl}/${season}/${episode}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="origin"
            allowFullScreen
        ></iframe>
    );
}
