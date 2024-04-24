import { envServer } from "@/utils/env/env.server";
import PlayerSection from "@/components/pagesComponents/playerSection/PlayerSection";
type Type_props = {
    searchParams:{
        id: string
        title: string
    }
}
export default function Watch({searchParams}: Type_props) {
    const { id, title}=searchParams;
    const {IFRAME_BASE_URL} = envServer
    return (
        <div className="max-w-8xl p-4 mx-auto grid md:grid-cols-[3fr,1fr] gap-4">
            {IFRAME_BASE_URL && (
                <PlayerSection
                    media_type="movie"
                    title={title}
                    id={id}
                    media_src={IFRAME_BASE_URL}
                />
            )}
            <aside>some data</aside>
        </div>
    );
}
