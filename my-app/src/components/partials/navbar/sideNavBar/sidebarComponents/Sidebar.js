import SidebarItem from "@/components/partials/navbar/sideNavBar/sidebarComponents/SidebarItem";
export default function Sidebar(props) {
    const {itemData,isActive,handleToggle} = props;
	return (
        <>
            <ul>
                {itemData.map((item, index) => (
                    <SidebarItem key={index} item={item} handleToggle={handleToggle} index={index} isActive={isActive} />
                ))}
            </ul>
        </>
	);
}