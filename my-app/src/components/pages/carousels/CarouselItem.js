"use client";
export default function CarouselItem(props) {
    const {media_type}=props
    return (
        <div className="text-3xl">{media_type}</div>
    )
}