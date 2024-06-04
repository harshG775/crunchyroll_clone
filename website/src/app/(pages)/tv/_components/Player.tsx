import { Status } from "@/types/TvDetailsType";
import { Iframe_tv } from "./Iframe";
type PlayerType = {
    status: Status;
    id: number;
    title: string;
    backdrop_path: string;
};
export default function Player({
    status,
    id,
    title,
    backdrop_path,
}: PlayerType) {
    return (
        <header className="">
            {/* <BackgroundImage
                url={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            > */}
                {status === "Returning Series" ? (
                    <Iframe_tv
                        domain="pro"
                        title={title}
                        id={id}
                        season={1}
                        episode={1}
                    />
                ) : (
                    <p>{status}</p>
                )}
            {/* </BackgroundImage> */}

            <p>Player</p>
            {"<Player status={data.status}/>"}
        </header>
    );
}

type BackgroundImageType = {
    url: string;
    children: React.ReactNode;
};
function BackgroundImage({ url, children, ...rest }: BackgroundImageType) {
    return (
        <div
            {...rest}
            style={{
                backgroundImage: `url(${url})`,
                backdropFilter: "opacity(20%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className=" rounded-lg aspect-video"
        >
            {children}
        </div>
    );
}
