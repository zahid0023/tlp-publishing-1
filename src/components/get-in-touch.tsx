import { Globe, Mail, MessageCircle, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

interface GetInTouchProps {
  className?: string;
}

const channels = [
  {
    icon: Phone,
    color: "from-green-500/20 to-green-500/5 border-green-500/20",
    iconColor: "text-green-400",
    label: "Call",
    value: "+1 (662) 596-6242",
    description: "Mon–Fri, 9am–6pm",
    href: "tel:+16625966242",
    cta: "Call now",
  },
  {
    icon: MessageCircle,
    color: "from-sky-500/20 to-sky-500/5 border-sky-500/20",
    iconColor: "text-sky-400",
    label: "SMS",
    value: "Text us anytime",
    description: "We reply within minutes",
    href: "sms:+16625966242",
    cta: "Send a text",
  },
  {
    icon: Mail,
    color: "from-violet-500/20 to-violet-500/5 border-violet-500/20",
    iconColor: "text-violet-400",
    label: "Email",
    value: "info@tlppublishing.com",
    description: "Response within 24 hours",
    href: "mailto:info@tlppublishing.com",
    cta: "Send email",
  },
  {
    icon: Globe,
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/20",
    iconColor: "text-amber-400",
    label: "Website",
    value: "www.tlppublishing.com",
    description: "Explore all our services",
    href: "#",
    cta: "Visit site",
  },
];

const GetInTouch = ({ className }: GetInTouchProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you have a question, need a quote, or just want to say hi —
            we&apos;re always a message away.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              className={cn(
                "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                ch.color,
              )}
            >
              {/* Glow blob */}
              <div className="pointer-events-none absolute -top-6 -right-6 size-24 rounded-full bg-current opacity-10 blur-2xl" />

              <div
                className={cn(
                  "flex size-12 items-center justify-center rounded-xl border bg-background/60 backdrop-blur-sm",
                  ch.color,
                )}
              >
                <ch.icon className={cn("size-6", ch.iconColor)} />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {ch.label}
                </p>
                <p className="font-semibold leading-snug">{ch.value}</p>
                <p className="text-xs text-muted-foreground">{ch.description}</p>
              </div>

              <span
                className={cn(
                  "text-sm font-semibold transition-colors",
                  ch.iconColor,
                  "group-hover:underline",
                )}
              >
                {ch.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { GetInTouch };
