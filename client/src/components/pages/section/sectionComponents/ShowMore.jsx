import { Icon } from "@iconify/react"
export default function ShowMore(props) {
    const {title,onClick}=props
    return (
        <div className={" relative container mx-auto flex justify-center items-center p-2"}>
            <div className="z-0 border border-neutral-600 border-b absolute bottom-0 w-full"></div>
            <div 
                onClick={onClick}
                className="
                 relative top-6
                z-10 bg-neutral-900 hover:bg-neutral-600 outline-neutral-600
                outline outline-2              
                rounded-full grid grid-cols-[1fr_auto] items-center gap-4 pb-1 px-6"
                >
                <h2 className="text-xl font-semibold">
                    {title}
                </h2>
                <Icon className="text-2xl" icon={"iconamoon:arrow-down-2-light"}/>
            </div>
        </div>
    )
}