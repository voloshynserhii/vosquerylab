import ContactForm from "./ContactForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn, colors, gradients, radius, shadows, space, typography } from "../../src/theme";

const contactDetails = [
  {
    title: "Email Us",
    value: "vosquery@gmail.com",
    href: "mailto:hello@vosquery.lab",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value: "Carrer Apostol Santiago, 36\n12560 Benicassim, Community of Valencia, Spain",
    icon: MapPin,
  },
  {
    title: "Call Us",
    value: "+34 614 026 351",
    href: "tel:+15550000000",
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={cn(gradients.darkSection, space.sectionY)}>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className={cn(typography.label, colors.primaryLight)}>Contact</p>
            <h2 className={cn("mt-3", typography.headlineXL, colors.textPrimaryDark)}>Ready to build something amazing?</h2>
            <p className={cn("mx-auto mt-5 max-w-2xl", typography.bodyLarge, colors.textSecondaryDark)}>
              Let&apos;s discuss your project and see how we can help you achieve your AI engineering goals.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      
        <Reveal>
          <div className={cn("mt-12 grid gap-6 border border-white/10 bg-white/6 p-8 text-left backdrop-blur-md md:grid-cols-3", radius.xl, shadows.darkCard)}>
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/16 text-violet-200">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
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
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
