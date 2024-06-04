import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTrending } from "@/utils/AxiosTMDB";
import { TrendingMovieItemType, TrendingTvItemType } from "@/types/tmdb";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/lib/icons/lucide";

export default async function Trending() {
    try {
        const [movie, tv] = await Promise.all([
            getTrending({mediaType:"movie"}).then((data) => data.data),
            getTrending({mediaType:"tv"}).then((data) => data.data),
        ]);
        return (
            <section>
                <Tabs defaultValue="movie">
                    <div className="flex justify-between flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-semibold">Trending</h2>
                        <TabsList>
                            <TabsTrigger value="movie">Movies</TabsTrigger>
                            <TabsTrigger value="tv">TvShows</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="movie" asChild>
                        <div className="min-h-96 grid gap-2 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                            {movie.results.map(
                                (item: TrendingMovieItemType) => (
                                    <Card
                                        key={item.id}
                                        className="relative overflow-hidden "
                                    >
                                        <Link
                                            href={`/movie/${item.id}`}
                                            className="group"
                                        >
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                alt={item.title}
                                                width={180}
                                                height={200}
                                                className="w-full scale-110 group-hover:scale-125 duration-300"
                                            />
                                            <CardHeader className="p-2 sm:p-4 shadow-lg rounded-lg border absolute bottom-1 left-1 right-1 bg-card grid items-end">
                                                <CardTitle className=" p-0 line-clamp-1 group-hover:text-primary font-bold text-sm">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription>
                                                    {item.release_date}
                                                </CardDescription>
                                            </CardHeader>
                                        </Link>
                                    </Card>
                                )
                            )}
                            <Card className="overflow-hidden group">
                                <Link href="/movie/Trending">
                                    <CardHeader className="h-full grid place-content-center">
                                        <CardTitle className="flex justify-between group-hover:text-primary">
                                            more
                                            <Icon
                                                name="ArrowRight"
                                                className="translate-x-0.5  group-hover:translate-x-10 transition-transform duration-300 ease-in-out"
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                </Link>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="tv" asChild>
                    <div className="min-h-96 grid gap-2 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                            {tv.results.map(
                                (item: TrendingTvItemType) => (
                                    <Card
                                        key={item.id}
                                        className="relative overflow-hidden "
                                    >
                                        <Link
                                            href={`/movie/${item.id}`}
                                            className="group"
                                        >
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                alt={item.name}
                                                width={180}
                                                height={200}
                                                className="w-full scale-110 group-hover:scale-125 duration-300"
                                            />
                                            <CardHeader className="p-2 sm:p-4 shadow-lg rounded-lg border absolute bottom-1 left-1 right-1 bg-card grid items-end">
                                                <CardTitle className=" p-0 line-clamp-1 group-hover:text-primary font-bold text-sm">
                                                    {item.name}
                                                </CardTitle>
                                                <CardDescription>
                                                    {item.first_air_date}
                                                </CardDescription>
                                            </CardHeader>
                                        </Link>
                                    </Card>
                                )
                            )}
                            <Card className="overflow-hidden group">
                                <Link href="/tv/Trending">
                                    <CardHeader className="h-full grid place-content-center">
                                        <CardTitle className="flex justify-between group-hover:text-primary">
                                            more
                                            <Icon
                                                name="ArrowRight"
                                                className="translate-x-0.5  group-hover:translate-x-10 transition-transform duration-300 ease-in-out"
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                </Link>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        );
    } catch (error) {
        return (
            <section>
                <Tabs defaultValue="movie">
                    <div className="flex justify-between flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-semibold">Trending</h2>
                        <TabsList>
                            <TabsTrigger value="movie">Movies</TabsTrigger>
                            <TabsTrigger value="tv">TvShows</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="movie">
                        <div className="min-h-96 grid place-content-center">
                            something went wrong
                        </div>
                    </TabsContent>
                    <TabsContent value="tv">
                        <div className="min-h-96 grid place-content-center">
                            something went wrong
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        );
    }
}
