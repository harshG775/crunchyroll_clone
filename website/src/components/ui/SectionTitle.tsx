type SectionTitleType = {
    name: string;
    titleRight?: React.ReactNode;
};
export default function SectionTitle({ name, titleRight }: SectionTitleType) {
    return (
        <div className="flex justify-between flex-wrap items-center gap-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            {titleRight}
        </div>
    );
}
