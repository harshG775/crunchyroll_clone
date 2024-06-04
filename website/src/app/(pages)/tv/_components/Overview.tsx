import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export default function Overview({ className }: { className?: string }) {
    return (
        <section className={cn("", className)}>
            <SectionTitle name="Overview" />
            {"<Overview/>"}
        </section>
    );
}
