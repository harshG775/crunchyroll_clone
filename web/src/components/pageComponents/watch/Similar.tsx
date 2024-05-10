import React from "react"

type SimilarPropsType = {
    id:number
    className?:string
}
export default function Similar({id,...props}:SimilarPropsType) {
    return (
        <section className={props.className} {...props}>
            Similar
        </section>
    )
}
