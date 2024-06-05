import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export default function Comments({ className }: { className?: string }) {
    return (
        <section className={cn("", className)}>
            <SectionTitle name="Comments" />
            {"<Comments/>"}
        </section>
    );
}
