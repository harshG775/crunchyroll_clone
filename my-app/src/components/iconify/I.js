"use client";
import useClient from "@/hooks/useClient";
import { Icon } from "@iconify/react";

export function I(props) {
    return useClient(()=>{<Icon {...props} />})
}
export function InlineI(props) {
    return useClient(()=>{<Icon {...props} />})
}

