import { I } from "@/components/iconify/I"
export default function SectionTitle(props) {
    const {title,iconName,media_type}=props
    return (
        <div className=" relative container overflow-hidden mx-auto flex md:justify-start justify-center items-center p-2">
            <div className="z-0 border border-b absolute w-full"></div>
            <div className="
                z-10 
                md:ml-8
                border-l-2 border-r-2 border-b-2 border-b-neutral-900 border-t-2 border-t-neutral-900
                rounded-full bg-neutral-900 flex justify-center items-center gap-4 p-2 px-8">
                <I className="text-3xl" icon={iconName}/>
                <h1 className="text-xl font-semibold">
                    {title}
                </h1>
            </div>
            <div className="text-xl font-semibold absolute right-1 top-1">{media_type}</div>
        </div>
    )
}
