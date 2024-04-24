"use client";
interface IconProps {
    icon: any;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
}
interface InlineIconProps extends IconProps {
    inline?: boolean;
}



import { Icon } from "@iconify/react";
export function I(props: IconProps) {
    return <Icon {...props} />;
}
export function InlineI(props: InlineIconProps) {
    return <Icon {...props} />;
}
