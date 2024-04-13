import FilterSearch from "@/components/ui/filterSearch/FilterSearch";

type FilterProps = {
    searchParams: { 
        [key: string]: string | string[] | undefined 
    };
};
export default function Search({ searchParams }: FilterProps) {
    return (
        <>
            <FilterSearch />
        </>
    );
}
