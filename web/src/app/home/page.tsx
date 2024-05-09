import Hero from "@/components/pageComponents/home/hero/Hero";
import Popular from "@/components/pageComponents/home/popular/Popular";
import TopRated from "@/components/pageComponents/home/topRated/TopRated";
import Trending from "@/components/pageComponents/home/trending/Trending";

export default function Home() {
    return (
        <main className=" space-y-10">
            <header className="min-h-96">
                <Hero />
            </header>
            <div className=" lg:max-w-8xl transition-[max-width] duration-300 mx-auto grid lg:grid-cols-[1fr_320px] gap-2">
                <Trending />
                <TopRated />
            </div>
            <div className=" lg:max-w-8xl transition-[max-width] duration-300 mx-auto grid lg:grid-cols-[1fr_320px] gap-2">
                <Popular />
                <section>
                    <h2>upcoming</h2>
                    <ul>items</ul>
                </section>
            </div>
        </main>
    );
}
