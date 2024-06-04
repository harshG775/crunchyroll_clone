import { Status } from "@/types/TvDetailsType";
import { Iframe_tv } from "./Iframe";
type PlayerType = {
    status: Status
    id: number
    title: string
};
export default function Player({ status ,id,title}: PlayerType) {
    return (
        <header>
            {status === "Returning Series" ? 
            <Iframe_tv domain="pro" title={title} id={id} season={1} episode={1}/>
            : <p>{status}</p>}
            <p>Player</p>
            {"<Player status={data.status}/>"}
        </header>
    );
}
