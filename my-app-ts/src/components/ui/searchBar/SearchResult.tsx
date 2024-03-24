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
};

export default function SearchResult(props: SearchResultProps) {
    const { queryResult, setIsSearchBarOpen } = props;
    return (
        <ul className="max-h-96 scrollbar-thin overflow-auto bg-neutral-800/50 text-center p-4" >
            {queryResult?.results?.map((result: any, i: number) => (
                <li key={i}>
                    <Link
                        onClick={() => setIsSearchBarOpen(false)}
                        href={`/${result.media_type}/overview?id=${result.id}&title=${result.name}`}
                        className="flex gap-2 p-2"
                    >
                        <div>{result.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
