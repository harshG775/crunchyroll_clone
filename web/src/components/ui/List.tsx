import { cn } from "@/utils/cn";
import React from "react";

type CardsWrapperPropsType<T> = React.HTMLAttributes<HTMLUListElement> & {
    status: "pending" | "error" | "success";
    data: T[];
    render: (param: T) => JSX.Element;
};
export default function List<T>(props: CardsWrapperPropsType<T>) {
    const { className, status, data, render ,...rest} = props;
    return (
        <>
            {status === "pending" && <li>Loading...</li>}
            {status === "error" && <li>Error</li>}
            {status === "success" && (
                <ul className={cn(" ", className)} {...rest}>
                    {data?.map(render)}
                </ul>
            )}
        </>
    );
}