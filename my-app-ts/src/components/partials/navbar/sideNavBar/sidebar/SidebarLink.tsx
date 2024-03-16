import { I } from "@/components/icons/iconify/I";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export type Type_sidebarLinks={
    linkTo:string,
    title:string,
    iconName:string,
}
export default function SidebarLink({linkTo,title,iconName}:Type_sidebarLinks) {
    const paths = usePathname();
    return (
        <li>
            <Link href={linkTo} className={`flex gap-2 font-semibold ${paths.startsWith(linkTo)?"text-blue-600":"text-white"}`}>
                <I icon={iconName} />
                <span>{title}</span>
            </Link>
        </li>
    );
}