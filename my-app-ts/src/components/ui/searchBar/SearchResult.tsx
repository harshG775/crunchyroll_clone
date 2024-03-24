import Link from "next/link";



export type queryResult = {
    results: {
        name: string;
        id: string;
        media_type: string
    }[]
}
export type SearchResultProps = {
    queryResult: queryResult;
    setIsSearchBarOpen: any;
    media_type: string
};

export default function SearchResult(props: SearchResultProps) {
    const { media_type,queryResult, setIsSearchBarOpen } = props;
    console.log(queryResult);
    return (
        <ul className="max-h-96 scrollbar-thin overflow-auto bg-neutral-800/50 text-center p-4" >
            {queryResult?.results?.map((result: any, i: number) => (
                <li key={i}>
                    <Link
                        onClick={() => setIsSearchBarOpen(false)}
                        href={`/${media_type}/overview?id=${result.id}&title=${result.name}`}
                        className="flex gap-2 p-2"
                    >
                        <div>{result.name}</div>
                    </Link>
                    <Link
                        onClick={() => setIsSearchBarOpen(false)}
                        href={`/${media_type}/overview?id=${result.id}&title=${result.title}`}
                        className="flex gap-2 p-2"
                    >
                        <div>{result.title}</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
