import SectionTitle from "./sectionComponents/SectionTitle"
import CardItem from "./sectionComponents/cardItem/CardItem"
import ShowMore from "./sectionComponents/ShowMore"
export default function Section({title,iconName, data}) {
    return (
        <div className="bg-neutral-900 text-neutral-50 ">
            <SectionTitle title={title} iconName={iconName}/>
            <section className="container mx-auto">
                <ul className="grid gap-4 p-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                    {data?.results?.map((item) => (
                        <li key={item.id}>
                            <CardItem data={item} />
                        </li>
                    ))}
                </ul>
            </section>
            <ShowMore title={"Show More"} />
        </div>
    )
}