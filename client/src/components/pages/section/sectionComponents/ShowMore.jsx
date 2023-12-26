import { Icon } from "@iconify/react"
export default function ShowMore(props) {
    const {title,onClick}=props
    return (
        <div className={" relative container mx-auto flex justify-center items-center p-2"}>
            <div className="z-0 border border-b absolute w-full"></div>
            <div 
                onClick={onClick}
                className="
                z-10 bg-neutral-900 hover:bg-neutral-600
                outline outline-2              
                rounded-full flex justify-center items-center gap-4 p-1 px-8"
                >
                <h2 className="text-xl font-semibold">
                    {title}
                </h2>
                <Icon className="text-3xl" icon={"iconamoon:arrow-down-2-light"}/>
            </div>
        </div>
    )
}