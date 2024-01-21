import Image from "next/image";
import TMDB from "@/helper/TMDB";

function Header({data}) {
    const {backdrop_path,title, overview, poster_path} = data
    return (
        <>
            <div className="z-0 absolute inset-[0_0_auto_0] min-h-[30rem] bg-cover bg-[top_left] bg-no-repeat" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}></div>
            <header className="z-10 backdrop-sepia-0 bg-neutral-900/50">
                <div className="container mx-auto lg:min-h-[30rem] sm:min-h-[45rem] px-4 py-12 gap-4 grid lg:grid-cols-2">
                    <div className="grid place-content-center lg:place-content-start">
                        <Image
                            width={280}
                            height={360}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt={title}
                        />
                    </div>
                    <div className="grid place-content-center">
                        <div className="flex gap-2">
                            <button>Play</button>
                            <button>Add</button>
                            <button>Ratings</button>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:text-start text-center">
                        <h1 className="text-3xl ">{title}</h1>
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
