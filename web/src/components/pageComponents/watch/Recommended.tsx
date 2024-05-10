import React from "react"
type SimilarPropsType = {
    id:number
}
export default function Recommended({id,...props}:SimilarPropsType) {
    return (
        <section {...props}>
            Recommended
        </section>
    )
}
