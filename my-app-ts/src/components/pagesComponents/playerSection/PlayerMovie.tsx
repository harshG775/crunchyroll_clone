import Iframe from "./Iframe";
export type Type_props = {
    title: string;
    id: string;
};

const MOVIE = process.env.PUBLIC_MOVIE_PLAYER_URL || "process.env.PUBLIC_MOVIE_PLAYER_URL";
export default function PlayerMovie({ title, id }: Type_props) {
    const baseUrl = MOVIE.replace("{id}", id).replace("{domain}", "me");
    return (
        <div>
            <Iframe baseUrl={baseUrl} title={title} id={id} />
            <h1>{title}</h1>
        </div>
    );
}
