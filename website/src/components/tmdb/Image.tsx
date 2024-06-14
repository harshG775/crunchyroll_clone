import { BackdropSize, PosterSize } from "@/types/configurationType";
import Image, { ImageProps } from "next/image";
const imgBaseUrl = "https://image.tmdb.org/t/p";

type PosterProps = ImageProps & {
    src: string;
    size: PosterSize;
};

export function Poster({ src, size, ...rest }: PosterProps) {
    return <Image src={`${imgBaseUrl}/${size}/${src}`} {...rest} />;
}

type BackdropProps = ImageProps & {
    src: string;
    size: BackdropSize;
};

export function Backdrop({ src, size, ...rest }: BackdropProps) {
    return <Image src={`${imgBaseUrl}/${size}/${src}`} {...rest} />;
}
