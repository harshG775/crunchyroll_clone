import CardItem, { Type_cardItemsData } from "./cardItem/CardItem";
export default function CardContainer(props: {
    results: Type_cardItemsData[];
    media_type: string;
}) {
    const { results, media_type } = props;
    return (
        <section className="container mx-auto">
            <ul className="grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                {results?.map((item) => (
                    <li key={item.id}>
                        <CardItem data={item} media_type={media_type} />
                    </li>
                ))}
            </ul>
        </section>
    );
}