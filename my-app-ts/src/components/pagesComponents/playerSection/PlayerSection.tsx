import PlayerMovie from "./PlayerMovie";

export type Type_props = {
    media_type: "movie" | "tv";
    title: string;
    id: string;
};
export default function PlayerSection({media_type, title, id }: Type_props) {
    return (
        <section>
            {media_type === "movie" ? (
                <PlayerMovie title={title} id={id} />
            ) : (
                <div>Episode</div>
            )}
            <div>
                details, view and Ratings 
            </div>
        </section>
    );
}
