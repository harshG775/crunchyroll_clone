import SidebarLink, { Type_sidebarLinks } from "./SidebarLink";
type props = React.HtmlHTMLAttributes<HTMLDivElement> & {
    linksData: Type_sidebarLinks[];
};
export default function SidebarLinks({ linksData }: props) {
    return (
        <ul>
            {linksData.map((link: Type_sidebarLinks) => (
                <SidebarLink
                    key={link.title}
                    linkTo={link.linkTo}
                    title={link.title}
                    iconName={link.iconName}
                />
            ))}
        </ul>
    );
}
