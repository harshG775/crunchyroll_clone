"use client";
import SectionTitle from "@/components/ui/SectionTitle";
export default function FilesPlaying({ title }: { title: string }) {
    return (
        <section>
            <SectionTitle name="Playing" />
            <div>
                <div className="cursor-pointer text-sm text-primary-foreground bg-primary/80 hover:bg-primary/90 px-2 py-1">{title}</div>
            </div>
        </section>
    );
}
