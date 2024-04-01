export type Type_iframe_props = {
    media_src: string;
    title: string;
    id: string;
};
export default function Iframe({ media_src, title, id }: Type_iframe_props) {
    return (
        <iframe
            key={id}
            className="aspect-video w-full h-full rounded-lg"
            src={media_src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="origin"
            allowFullScreen
        ></iframe>
    );
}
