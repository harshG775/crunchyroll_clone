import Image from "next/image";
import Link from "next/link";

type resultItem_type = {
    title: string;
    name: string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    media_type:string
};
function ResultItem({
    data,
}: {
    data: resultItem_type;
}) {
    const { id, title, name, poster_path, first_air_date, release_date ,media_type} = data;
    const Title = title ? title : name;
    console.log(data);
    return (
        <Link
            href={`watch?media_type=${media_type}&id=${id}&title=${Title?.replace(
                / /g,
                "+"
            )}`}
            className="grid grid-cols-[auto,1fr] gap-2 p-2 hover:bg-neutral-900/40"
        >
            <div>
                <Image
                    src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                    alt="poster"
                    width={92}
                    height={92}
                    loading="lazy"
                />
            </div>
            <div className="text-start grid items-center">
                <h3 className="text-xl font-bold">{Title}</h3>
                <div className="flex justify-between items-center text-xs">
                    <span>{media_type}</span>
                    <p>{first_air_date ? first_air_date : release_date}</p>
                </div>
            </div>
        </Link>
    );
}
export type SearchResultProps = {
    queryResult: { results: resultItem_type[] };
    setIsSearchBarOpen: any;
};

export default function SearchResult(props: SearchResultProps) {
    const { queryResult, setIsSearchBarOpen } = props;
    return (
        <ul className="max-h-96 scrollbar-thin overflow-auto bg-neutral-800/50 text-center p-4">
            {queryResult?.results?.map((result: any) => (
                <>
                    {result.media_type === "person" ? (
                        ""
                    ) : (
                        <li
                            key={result.id}
                            onClick={() => setIsSearchBarOpen(false)}
                        >
                            <ResultItem data={result} />
                        </li>
                    )}
                </>
            ))}
        </ul>
    );
}
