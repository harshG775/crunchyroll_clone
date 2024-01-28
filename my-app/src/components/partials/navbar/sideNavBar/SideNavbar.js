"use client";
import { twMerge } from "tailwind-merge";
// import Sidebar from "@/partials/navbar/sideNavbar/sidebarComponents/Sidebar"
import Sidebar from "./sidebarComponents/Sidebar";
import { useState } from "react";
const accordionData = [
	{
		title: "Sidebar Title deep1",
		content: "Sidebar Content",
		haveSubMenu: true,
		subMenu: [
			{
				title: "Sidebar Title deep2",
				content: "Sidebar Content",
				haveSubMenu: true,
				subMenu: [
					{
						title: "Sidebar Title deep3",
						content: "Sidebar Content",
						haveSubMenu: true,
						subMenu: [
							{
								title: "Sidebar Title deep4",
								content: "Sidebar Content",
								haveSubMenu: false,
								subMenu: null,
							},
						],
					},
				],
			},
			{
				title: "Sidebar Title deep2",
				content: "Sidebar Content",
				haveSubMenu: true,
				subMenu: [
					{
						title: "Sidebar Title deep3",
						content: "Sidebar Content",
						haveSubMenu: false,
						subMenu: null,
					},
				],
			},
		],
	},
	{
		title: "Sidebar Title deep1",
		content: "Sidebar Content",
		haveSubMenu: true,
		subMenu: [
			{
				title: "Sidebar Title deep2",
				content: "Sidebar Content",
				haveSubMenu: true,
				subMenu: [
					{
						title: "Sidebar Title deep3",
						content: "Sidebar Content",
						haveSubMenu: false,
						subMenu: null,
					},
				],
			},
			{
				title: "Sidebar Title deep2",
				content: "Sidebar Content",
				haveSubMenu: true,
				subMenu: [
					{
						title: "Sidebar Title deep3",
						content: "Sidebar Content",
						haveSubMenu: false,
						subMenu: null,
					},
				],
			},
		],
	},
];
export default function SideNavbar({ className }) {
    const [isActive, setIsActive] = useState(-1);
    const handleToggle = (i) => {
        if (isActive==i) {
            return setIsActive(-1);
        }
        setIsActive(i);
    }
	return (
        <>
            <nav className={twMerge("app-side-navbar", className)}>
                <Sidebar itemData={accordionData}  handleToggle={handleToggle} isActive={isActive} setIsActive={setIsActive}/>
            </nav>
            <div className="sidebar-backdrop" onClick={() => setIsActive(-1)}>close aria backdrop</div>
        </>
	);
}
