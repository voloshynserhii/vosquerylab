import ContactForm from "./ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary } from "@i18n/dictionaries";
import { cn, colors, gradients, radius, shadows, space, typography } from "../../src/theme";

const contactIcons = [Mail, MapPin, Phone];

export default function Contact({
  dictionary,
}: {
  dictionary: Pick<Dictionary, "home">;
}) {
  const contact = dictionary.home.contact;

  return (
    <section id="contact" className={cn(gradients.darkSection, space.sectionY)}>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className={cn(typography.label, colors.primaryLight)}>{contact.eyebrow}</p>
            <h2 className={cn("mt-3", typography.headlineXL, colors.textPrimaryDark)}>{contact.title}</h2>
            <p className={cn("mx-auto mt-5 max-w-2xl", typography.bodyLarge, colors.textSecondaryDark)}>
              {contact.description}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm labels={contact.form} />
        </Reveal>
      
        <Reveal>
          <div className={cn("mt-12 grid gap-6 border border-white/10 bg-white/6 p-8 text-left backdrop-blur-md md:grid-cols-3", radius.xl, shadows.darkCard)}>
            {contact.details.map((detail, index) => {
              const Icon = contactIcons[index % contactIcons.length];

              return (
              <div key={detail.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/16 text-violet-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className={cn("mb-2", typography.titleSmall, colors.textPrimaryDark)}>{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href} className={cn("whitespace-pre-line hover:text-white", typography.bodySmall, colors.textSecondaryDark)}>
                      {detail.value}
                    </a>
                  ) : (
                    <p className={cn("whitespace-pre-line", typography.bodySmall, colors.textSecondaryDark)}>{detail.value}</p>
                  )}
                </div>
              </div>
            );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
