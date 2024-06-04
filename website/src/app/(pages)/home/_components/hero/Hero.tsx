import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Icon from "@/lib/icons/lucide";
import { TrendingAllItemType } from "@/types/tmdb";
import { getTrending } from "@/utils/AxiosTMDB";
import Image from "next/image";
import Link from "next/link";

export default async function HeroSection() {
    try {
        const all = await getTrending({mediaType:"all"}).then((data) => data.data);
        return (
            <>
                <section className="min-h-96">{"<Hero />"}</section>
                <section>
                    <Carousel 
                    // setApi={setApi}
                    >
                        <CarouselContent>
                            {all.results.map((item: TrendingAllItemType) => (
                                <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5" key={item.id}>
                                    <Card className="relative overflow-hidden flex-shrink-0">
                                        <Link
                                            href={`/movie/${item.id}`}
                                            className="group "
                                        >
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                alt={item.title}
                                                width={180}
                                                height={200}
                                                className="max-w-52 scale-110 group-hover:scale-125 duration-300"
                                            />
                                            <CardHeader className="p-2 sm:p-4 shadow-lg rounded-lg border absolute bottom-1 left-1 right-1 bg-card grid items-end">
                                                <CardTitle className=" p-0 line-clamp-1 group-hover:text-primary font-bold text-sm">
                                                    {item?.title} {item?.name}
                                                </CardTitle>
                                                <CardDescription>
                                                    {item?.release_date} {item?.first_air_date}
                                                </CardDescription>
                                            </CardHeader>
                                        </Link>
                                    </Card>
                                </CarouselItem>
                            ))}
                            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
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
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </section>
            </>
        );
    } catch (error) {
        return (
            <header>
                <section className="min-h-96">Something went wrong</section>
                <section className="container min-h-40">
                    Something went wrong
                </section>
            </header>
        );
    }
}
