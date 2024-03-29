import Iframe from "./Iframe";
export type Type_props = {
    baseUrl: string;
    title: string;
    id: string;
};

export default function PlayerMovie({baseUrl, title, id }: Type_props) {
    return (
        <div>
            <Iframe baseUrl={baseUrl} title={title} id={id} />
        </div>
    );
}
