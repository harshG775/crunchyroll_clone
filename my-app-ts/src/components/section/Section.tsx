import { Suspense } from "react";
import SectionTitle from "./sectionComponents/SectionTitle";
import ShowMore from "./sectionComponents/ShowMore";
import CardItem, {
    Type_cardItemsData,
} from "./sectionComponents/cardItem/CardItem";

function CardContainer(props: {
    results: Type_cardItemsData[];
    media_type: string;
}) {
    const { results, media_type } = props;
    return (
        <section className="container mx-auto">
            <ul className="grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                {results?.map((item) => (
                    <li key={item.id}>
                        <Suspense
                            fallback={
                                <div className="aspect-video grid place-content-center">
                                    Loading...
                                </div>
                            }
                        >
                            <CardItem data={item} media_type={media_type} />
                        </Suspense>
                    </li>
                ))}
            </ul>
        </section>
    );
}
type Type_sectionProps = {
    title: string;
    iconName: string;
    results: Type_cardItemsData[];
    media_type: "movie" | "tv";
};

export default function Section(props: Type_sectionProps) {
    const { title, iconName, results, media_type } = props;
    return (
        <div className="bg-neutral-900 text-neutral-50 ">
            <SectionTitle
                title={title}
                iconName={iconName}
                media_type={media_type}
            />
            <CardContainer results={results} media_type={media_type} />
            <ShowMore
                title={"Show More"}
                media_type={media_type}
            />
        </div>
    );
}
