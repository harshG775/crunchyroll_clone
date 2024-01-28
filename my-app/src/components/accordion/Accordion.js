"use client";
import { useState } from "react";

const accordionData = [
	{
		title: "Accordion Title deep1",
		content: "Accordion Content",
		haveSubMenu: true,
		subMenu: [
            {
                title: "Accordion Title deep2",
                content: "Accordion Content",
                haveSubMenu: true,
                subMenu: [
                    {
                        title: "Accordion Title deep3",
                        content: "Accordion Content",
                        haveSubMenu: true,
                        subMenu: [
                            {
                                title: "Accordion Title deep4",
                                content: "Accordion Content",
                                haveSubMenu: false,
                                subMenu: null,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Accordion Title deep2",
                content: "Accordion Content",
                haveSubMenu: true,
                subMenu: [
                    {
                        title: "Accordion Title deep3",
                        content: "Accordion Content",
                        haveSubMenu: false,
                        subMenu: null,
                    },
                ],
            },
		],
	},
	{
		title: "Accordion Title deep1",
		content: "Accordion Content",
		haveSubMenu: true,
		subMenu: [
            {
                title: "Accordion Title deep2",
                content: "Accordion Content",
                haveSubMenu: true,
                subMenu: [
                    {
                        title: "Accordion Title deep3",
                        content: "Accordion Content",
                        haveSubMenu: false,
                        subMenu: null,
                    },
                ],
            },
            {
                title: "Accordion Title deep2",
                content: "Accordion Content",
                haveSubMenu: true,
                subMenu: [
                    {
                        title: "Accordion Title deep3",
                        content: "Accordion Content",
                        haveSubMenu: false,
                        subMenu: null,
                    },
                ],
            },
		],
	},
];
const AccordionItemDeep = ({ item,handleToggleDeep,indexDeep,isActiveDeep  }) => {
    if (!item.haveSubMenu) {
        return (
            <li className="mt-2">
                <button className="bg-green-600 text-neutral-50">{item.title}</button>
            </li>
        );

    }
	return (
		<li className={` mt-2
        grid transition-grid-rows duration-300 ${isActiveDeep===indexDeep ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]"}
        `}>
			<div>
                <button onClick={()=>handleToggleDeep(indexDeep)} className="bg-green-600 text-neutral-50">{item.title}</button>
            </div>
            <ul className="ml-4 overflow-hidden transition-grid-rows duration-300">
                {item.subMenu.map((item, index) => (
                    <li className="mt-2" key={index}>
                        <button className="bg-green-600 text-neutral-50">{item.title}</button>
                    </li>
                ))}
            </ul>
		</li>
	);
};
const AccordionItem = ({ item,handleToggle,index,isActive }) => {
    const [isActiveDeep, setIsActiveDeep] = useState(-1);

    if (!item.haveSubMenu) {
        return (
            <li className="mt-2">
                <button className="bg-green-600 text-neutral-50">{item.title}</button>
            </li>
        );

    }

    const handleToggleDeep = (i) => {
        if (isActiveDeep==i) {
            return setIsActiveDeep(-1);
        }
        setIsActiveDeep(i);
    }

	return (
		<li className={` mt-2
        grid transition-grid-rows duration-300 ${isActive===index ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]"}
        `}>
			<div>
                <button onClick={()=>handleToggle(index)} className="bg-green-600 text-neutral-50">{item.title}</button>
            </div>
            <ul className="ml-4 overflow-hidden transition-grid-rows duration-300">
                {item.subMenu.map((item, indexDeep) => (
                        <AccordionItemDeep key={indexDeep} item={item} handleToggleDeep={handleToggleDeep} indexDeep={indexDeep} isActiveDeep={isActiveDeep}/>
                ))}
            </ul>
		</li>
	);
};
export default function Accordion() {
    const [isActive, setIsActive] = useState(-1);
    const handleToggle = (i) => {
        if (isActive==i) {
            return setIsActive(-1);
        }
        setIsActive(i);
    }
	return (
        <>
            <ul>
                {accordionData.map((item, index) => (
                    <AccordionItem key={index} item={item} handleToggle={handleToggle} index={index} isActive={isActive} />
                ))}
            </ul>
            <div onClick={() => setIsActive(-1)}>close aria backdrop</div>
        </>
	);
}