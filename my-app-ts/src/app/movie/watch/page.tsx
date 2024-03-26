import React from 'react'
// /movie/watch?id=84958&title=Loki
type Type_props = {
    searchParams:{
        id: string
        title: string
    }
}
export default function page({searchParams}: Type_props) {
    const { id, title}=searchParams;
    return (
        <div className="max-w-8xl p-4 mx-auto grid md:grid-cols-[3fr,1fr] gap-4">
            <div>
                <iframe
                    className="aspect-video w-full rounded-lg"
                    src={`https://vidsrc.to/embed/movie/${id}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <h1>{title}</h1>
            </div>
            <aside>
                some data
            </aside>
        </div>
    );
}
