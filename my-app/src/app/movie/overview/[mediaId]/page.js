import Image from "next/image";
import TMDB from "@/helper/TMDB";
export default async function MediaId({ params }) {
    const id = params?.mediaId.split('.%3D.')[1]
    try {
        const { data } = await TMDB.DetailsById("movie", id);
        
        return (
            <div>
                <h1>MediaId</h1>
                <p>{params.movie_id}</p>
                {data && (
                    <div>
                        <h1>{data.title}</h1>
                        <Image
                            width={480}
                            height={720}
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p>{data.overview}</p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.log(error);
        return <div className="grid place-content-center min-h-screen">Something went wrong</div>
    }
}
