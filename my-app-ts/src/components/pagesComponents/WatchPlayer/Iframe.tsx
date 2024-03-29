export type MovieProps = {
    domain: string;
    title: string;
    id: string;
};

const MOVIE = process.env.PUBLIC_MOVIE_PLAYER_URL;

export function Iframe_movie({ domain, title, id }: MovieProps) {
    const baseUrl = MOVIE?.replace("{id}", id).replace("{domain}", domain);

    return (
        <iframe
            key={id}
            className="aspect-video w-full h-full rounded-lg"
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
    id: string;
    season: string;
    episode: string;
};
const TV = process.env.PUBLIC_TV_PLAYER_URL;
export function Iframe_tv({ domain, title, id, season, episode }: TvProps) {
    const baseUrl = TV?.replace("{id}", id)
        .replace("{domain}", domain)
        .replace("{season}", season)
        .replace("{episode}", episode);
    return (
        <iframe
            key={id}
            className="aspect-video w-full h-full rounded-lg"
            src={baseUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="origin"
            allowFullScreen
        ></iframe>
    );
}