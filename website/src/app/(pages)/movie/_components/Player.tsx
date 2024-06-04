import { Status } from "@/types/MovieDetailsType";
import { Iframe_movie } from "./Iframe";
type PlayerType = {
    status: Status
    id: number
    title: string
};
export default function Player({ status ,id,title}: PlayerType) {
    return (
        <header>
            {status === "Released" ? 
            <Iframe_movie domain="pro" title={title} id={id} />
            : <p>{status}</p>}
            <p>Player</p>
            {"<Player status={data.status}/>"}
        </header>
    );
}
