import SectionTitle from "./sectionComponents/SectionTitle";
import ShowMore from "./sectionComponents/ShowMore";
import CardItem from "./sectionComponents/cardItem/CardItem";
type Type_sectionProps = {
    title: string;
    iconName: string;
    data: {
        results: Array<TypeCardItem>[]
    };
    media_type:string;
}
type TypeCardItem = {
    name:string
    original_name:string
    title:string
    original_title:string
    id:number
    vote_average:number
}
export default function Section({title,iconName, data,media_type}:Type_sectionProps) {
    return (
        <div className="bg-neutral-900 text-neutral-50 ">
            <SectionTitle title={title} iconName={iconName} media_type={media_type}/>
            <section className="container mx-auto">
                <ul className="grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                    {data?.results?.map((item:TypeCardItem) => (
                        <li key={item.id}>
                            <CardItem {...item} media_type={media_type} />
                        </li>
                    ))}
                </ul>
            </section>
            <ShowMore title={"Show More"} media_type={media_type} />
        </div>
    )
}