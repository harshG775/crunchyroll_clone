"use client";
import { twMerge } from "tailwind-merge";
import Sidebar from "@/components/partials/navbar/sideNavBar/sidebarComponents/Sidebar";
import { useContext, useState } from "react";
import Context_db from "@/store/Context_db";
import {Actions} from "@/store/Reducer_db";
const accordionData = [
	{
		title: "home",
		content: "Sidebar Content",
		haveSubMenu: false,
	},
	{
		title: "movies",
		content: "Sidebar Content",
		haveSubMenu: false,
	},
	{
		title: "tv shows",
		content: "Sidebar Content",
		haveSubMenu: false,
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
    const [state,dispatch]=useContext(Context_db);
    const [isActive, setIsActive] = useState(-1);
    const handleToggle = (i) => {
        if (isActive==i) {
            return setIsActive(-1);
        }
        setIsActive(i);
    }

	return (
        <>
            <nav className={twMerge(`app-side-navbar ${state.isSidebarOpen?"":"hide-sidebar "}`, className)}>
                <Sidebar itemData={accordionData}  handleToggle={handleToggle} isActive={isActive} setIsActive={setIsActive}/>
            </nav>
            <div className={`sidebar-backdrop ${state.isSidebarOpen?"":" hidden "}`} onClick={() => setIsActive(-1)}></div>
        </>
	);
}
