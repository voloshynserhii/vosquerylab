import Link from "next/link";
import Image from "next/image";
import TechChip from "@/components/ui/TechChip";
import { cn, colors, radius, shadows, transitions, typography } from "../../src/theme";

interface ClientCardData {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export default function ClientCard({ client }: { client: ClientCardData }) {
    return (
        <article className={cn("group flex min-h-full flex-col overflow-hidden border border-white/12 bg-white/6 backdrop-blur-md", radius.xl, shadows.darkCard, transitions.hoverLift)}>
            <div className="relative h-56 w-full overflow-hidden bg-white/8">
                <Image
                    src={client.image}
                    alt={`${client.name} project preview`}
                    fill
                    className={cn("object-cover", transitions.scaleHover)}
                    loading="lazy"
                />
            </div>
            <div className="flex flex-grow flex-col p-5">
                <p className={cn("mb-2", typography.caption, colors.primaryLight)}>{client.category}</p>
                <h3 className={cn("mb-3", typography.titleSmall, colors.textPrimaryDark)}>
                    <Link href={client.link}>
                        {client.name}
                    </Link>
                </h3>
                <p className={cn("mb-5 line-clamp-3 flex-grow", typography.bodySmall, colors.textSecondaryDark)}>
                    {client.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag: string) => (
                        <TechChip key={tag} dark>{tag}</TechChip>
                    ))}
                </div>
            </div>
        </article>
    );
}
