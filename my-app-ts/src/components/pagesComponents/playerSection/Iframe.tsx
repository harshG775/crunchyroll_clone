export type Type_iframe_props = {
    baseUrl: string;
    title: string;
    id: string;
}
export default function Iframe({ baseUrl, title, id }: Type_iframe_props) {

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
            sandbox="allow-scripts allow-same-origin"
        ></iframe>
    );
}