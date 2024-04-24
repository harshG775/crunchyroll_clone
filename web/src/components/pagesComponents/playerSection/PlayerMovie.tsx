import Iframe from "./Iframe";
export type Type_props = {
    media_src: string;
    title: string;
    id: string;
};

export default function PlayerMovie({media_src, title, id }: Type_props) {
    return (
        <div>
            <Iframe media_src={media_src} title={title} id={id} />
        </div>
    );
}
