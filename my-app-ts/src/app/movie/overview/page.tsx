import OverviewHeader from "@/components/pagesComponents/overview/OverviewHeader";
import axios_tmdb from "@/lib/axios_tmdb";
type Type_searchParams = {
    id: string,
    title: string
}
export default async function page({searchParams}: {searchParams: Type_searchParams}) {
    try {
        const {data} = await axios_tmdb.get(`/movie/${searchParams?.id}`);
        return (
            <OverviewHeader data={data} />
        );
        
        
    } catch (error: any) {
        return (
            <div className="grid gap-2 place-content-center min-h-[calc(100vh-4rem)] text-center">
                <h1>{error?.message}</h1>
                <p>{error?.response?.data?.status_message}</p>
            </div>
        );
    }
    
}
