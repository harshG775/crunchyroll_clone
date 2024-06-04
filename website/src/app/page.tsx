import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/lib/icons/lucide";
import Link from "next/link";

const navLinks = [
    {
        name: "Home",
        href: "/home",
    },
    {
        name: "Trending",
        href: "/trending",
    },
    {
        name: "Movies",
        href: "/movie",
    },
    {
        name: "Tv Shows",
        href: "/tv",
    },
];

export default function RootPage() {
    return (
        <main className="min-h-screen grid items-center">
            <section className="container py-2 space-y-4">
                <div className="grid place-content-center">
                    <h1 className="text-3xl font-black uppercase">
                        <span className="text-primary">O</span>
                        nyx
                    </h1>
                </div>
                <ul className="flex justify-center flex-wrap gap-2">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="hover:text-primary transition-colors text-xl font-bold"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <form
                    action="search"
                    method="get"
                    className="max-w-2xl mx-auto flex justify-between relative"
                >
                    <Label htmlFor="query" className="sr-only">
                        Search
                    </Label>
                    <Input
                        type="text"
                        id="query"
                        name="query"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 hover:text-primary"
                    >
                        <Icon name="Search" />
                    </button>
                </form>
                <div className="text-center">
                    <Button asChild>
                        <Link href="/home">Home</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
