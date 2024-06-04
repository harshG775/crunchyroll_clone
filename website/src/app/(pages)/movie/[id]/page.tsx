import { getInfoById } from "@/utils/AxiosTMDB";
import { MovieDetailsType } from "@/types/MovieDetailsType";
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
        const { data }: { data: MovieDetailsType } = await getInfoById({
            mediaType: "movie",
            id: id,
        });
        return (
            <main className="space-y-10">
                <div className="container grid gap-y-10 gap-x-2 lg:grid-cols-[1fr_300px]">
                    <Player status={data.status} id={data.id} title={data.title}/>
                    <FilesPlaying title={data.title}/>
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
