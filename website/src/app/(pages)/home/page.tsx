
import Trending from "./_components/Trending";
import HeroSection from "./_components/hero/Hero";
import TopRated from "./_components/topRated/TopRated";
export default function HomePage() {
    return (
        <main className=" space-y-10">
            
            <header className="container">
                <HeroSection/>
            </header>
            <div className="container grid gap-10 lg:gap-2 lg:grid-cols-[4fr_300px]">
                <Trending />
                <TopRated />
            </div>
            <div className="container grid gap-10 lg:gap-2 lg:grid-cols-[4fr_300px]">
                <section className="min-h-96">
                    {"<Popular />"}
                </section>
                <section className="min-h-96">
                    {"<Upcoming />"}
                </section>
            </div>
        </main>
    );
}
