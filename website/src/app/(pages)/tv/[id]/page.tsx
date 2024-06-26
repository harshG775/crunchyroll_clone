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
        return (
            <main className="space-y-10 py-2">
                <div className="container py-2 grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px] lg:aspect-[21/9] shadow-md">
                    <Player
                        backdrop_path={data.backdrop_path}
                        status={data.status}
                        id={data.id}
                        title={data.name}
                    />
                    <FilesPlaying
                        title={data.name}
                        seasons={data.seasons}
                        episodes={data.number_of_episodes}
                    />
                </div>
                <div className="container grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px]">
                    <Overview  data={data} />
                    <Comments className="lg:col-span-2"/>
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
