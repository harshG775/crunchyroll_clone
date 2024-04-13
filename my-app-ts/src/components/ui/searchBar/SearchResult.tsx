import Image from "next/image";
import Link from "next/link";

type resultItem_type = {
    title: string;
    name: string;
    id: string;
    media_type: string;
    poster_path: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
};
function ResultItem({ data }: { data: resultItem_type }) {
    const {
        media_type,
        id,
        title,
        name,
        poster_path,
        first_air_date,
        release_date,
    } = data;
    const t = getTitle(media_type, title, name);
    // console.log(data);
    return (
        <Link
            href={`/${media_type}/overview?id=${id}&title=${name}`}
            className="grid grid-cols-[auto,1fr] gap-2 p-2 hover:bg-neutral-900/40"
        >
            <div>
                <Image
                    src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                    alt="poster"
                    width={92}
                    height={92}
                />
            </div>
            <div className="text-start grid items-center">
                <h3 className="text-xl font-bold">{t}</h3>
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
                <li key={result.id} onClick={() => setIsSearchBarOpen(false)}>
                    <ResultItem data={result} />
                </li>
            ))}
        </ul>
    );
}

const getTitle = (media_type: string, title?: string, name?: string) => {
    if (media_type === "movie") {
        return title;
    }
    if (media_type === "tv") {
        return name;
    }
};
