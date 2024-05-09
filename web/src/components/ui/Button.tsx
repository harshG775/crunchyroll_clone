import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";
type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger" | "success" | "warning";
};
export default function Button({ variant, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant }), className)}
        />
    );
}
const buttonVariants = cva(
    "rounded px-4 py-2 hover:bg-opacity-80 tracking-tighter font-semibold", 
    {
        variants: {
            variant: {
                primary: "bg-blue-500 text-neutral-50",
                secondary: "bg-neutral-500 text-neutral-50",
                danger: "bg-red-500 text-neutral-50",
                success: "bg-green-500 text-neutral-50",
                warning: "bg-yellow-500 text-neutral-50",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
