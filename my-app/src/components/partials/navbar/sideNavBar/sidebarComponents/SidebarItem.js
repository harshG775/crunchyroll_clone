"use client";
import { useState } from "react";

const SidebarItemDeep_1 = ({ item,handleToggleDeep,indexDeep,isActiveDeep  }) => {
    if (!item.haveSubMenu) {
        return (
            <li className="mt-2">
                <button className="w-full bg-neutral-600 text-neutral-50">{item.title}</button>
            </li>
        );

    }
	return (
		<li className={` mt-2
        grid transition-grid-rows duration-300 ${isActiveDeep===indexDeep ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_0fr]"}
        `}>
			<div>
                <button onClick={()=>handleToggleDeep(indexDeep)} className="w-full bg-neutral-600 text-neutral-50">{item.title}</button>
            </div>
            <ul className="mr-4 overflow-hidden transition-grid-rows duration-300">
                {item.subMenu.map((item, index) => (
                    <li className="mt-2" key={index}>
                        <button className="bg-neutral-600 text-neutral-50">{item.title}</button>
                    </li>
                ))}
            </ul>
		</li>
	);
};
export default function SidebarItem ({ item,handleToggle,index,isActive }) {
    const [isActiveDeep, setIsActiveDeep] = useState(-1);

    if (!item.haveSubMenu) {
        return (
            <li className="mt-2">
                <button className="text-start w-full bg-neutral-600 text-neutral-50">{item.title}</button>
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
                <button onClick={()=>handleToggle(index)} className="text-start w-full bg-neutral-600 text-neutral-50">{item.title}</button>
            </div>
            <ul className="mr-4 overflow-hidden transition-grid-rows duration-300">
                {item.subMenu.map((item, indexDeep) => (
                        <SidebarItemDeep_1 key={indexDeep} item={item} handleToggleDeep={handleToggleDeep} indexDeep={indexDeep} isActiveDeep={isActiveDeep}/>
                ))}
            </ul>
		</li>
	);
};