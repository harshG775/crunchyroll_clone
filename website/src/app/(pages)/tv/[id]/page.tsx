import { getInfoById } from "@/utils/AxiosTMDB";
import { TvDetailsType } from "@/types/TvDetailsType";
import { notFound } from "next/navigation";
import Overview from "../_components/Overview";
import Recommended from "../_components/Recommended";
import Similar from "../_components/Similar";
import Comments from "../_components/Comments";
import FilesPlaying from "../_components/FilesPlaying";
import Player from "../_components/Player";
export default async function page({ params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { data }: { data: TvDetailsType } = await getInfoById({
            mediaType: "tv",
            id: id,
        });
        console.log(data);
        return (
            <main className="space-y-10">
                <div className="container grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px]">
                    <Player status={data.status} id={data.id} title={data.name}/>
                    <FilesPlaying title={data.name} seasons={data.number_of_seasons} episodes={data.number_of_episodes}/>
                    <Overview className="lg:col-span-2"/>
                </div>
                <div className="container grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px]">
                    <Comments />
                    <Similar />
                    <Recommended />
                </div>
            </main>
        );
    } catch (error: any) {
        if (error.response.data.status_code === 34) {
            return notFound();
        }
        return (
            <main>
                <h1>something went wrong</h1>
            </main>
        );
    }
}
