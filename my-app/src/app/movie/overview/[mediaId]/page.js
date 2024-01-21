import Image from "next/image";
import TMDB from "@/helper/TMDB";

function Header({data}) {
    const {backdrop_path,title, overview, poster_path} = data
    return (
        <>
            <div className="z-0 absolute inset-[0_0_auto_0] min-h-[30rem] bg-cover bg-[top_left] bg-no-repeat" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}></div>
            <header className="z-10 backdrop-sepia-0 bg-neutral-900/50">
                <div className="container mx-auto min-h-[35rem] p-4 gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
                    <div className="lg:order-1 sm:order-1">
                        <Image
                            width={280}
                            height={360}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={title}
                        />
                    </div>
                    <div className="lg:order-2 sm:order-3 lg:col-span-1 sm:col-span-2">
                        <h1 className="text-3xl">{title}</h1>
                        <div className="flex gap-2">
                            <button>Play</button>
                            <button>Add</button>
                            <button>Ratings</button>
                        </div>
                    </div>
                    <div className="lg:order-3 sm:order-2">
                        
                        <p>{overview}</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default async function MediaId({ params }) {
	const id = params?.mediaId.split(".%3D.")[1];
	try {
		const { data } = await TMDB.DetailsById("movie", id);

		return (
			<div>
				{data && <Header data={data}/>}
			</div>
		);
	} catch (error) {
		console.log(error);
		return (
			<div className="grid place-content-center min-h-screen">
				Something went wrong
			</div>
		);
	}
}
