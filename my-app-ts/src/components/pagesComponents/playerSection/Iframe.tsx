import { useEffect, useState } from "react";

export type Type_iframe_props = {
    media_src: string;
    title: string;
    id: string;
};
export default function Iframe({ media_src, title, id }: Type_iframe_props) {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    }
    return (
        <iframe
            key={id}
            className="aspect-video w-full h-full rounded-lg"
            src={media_src}
            title={title}
            frameBorder="0"
            referrerPolicy="origin"
            allowFullScreen
        ></iframe>
    );
}
