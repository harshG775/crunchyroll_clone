import SectionTitle from "./sectionComponents/SectionTitle";
import ShowMore from "./sectionComponents/ShowMore";
import CardContainer from "./sectionComponents/CardContainer";
import { Type_cardItemsData } from "./sectionComponents/cardItem/CardItem";

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
