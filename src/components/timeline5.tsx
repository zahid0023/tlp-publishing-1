"use client";

import { BookOpen, Bot, Briefcase, Globe, Mail, PenTool, Sparkles, TrendingUp } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

interface DataItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DATA: DataItem[] = [
  {
    icon: <Globe strokeWidth={1.5} className="size-12" />,
    title: "Website Development",
    description:
      "We build high-performance, conversion-focused websites designed to function as long-term digital assets for your business—not just online brochures.",
  },
  {
    icon: <PenTool strokeWidth={1.5} className="size-12" />,
    title: "Logo Development",
    description:
      "We create distinctive brand identities that establish credibility, recognition, and consistency across all customer touchpoints.",
  },
  {
    icon: <Mail strokeWidth={1.5} className="size-12" />,
    title: "Email, SMS & AI Marketing",
    description:
      "We implement integrated marketing systems that automate communication, nurture leads, and drive consistent engagement across multiple channels.",
  },
  {
    icon: <TrendingUp strokeWidth={1.5} className="size-12" />,
    title: "Long-Term Asset Development",
    description:
      "Our approach treats marketing as a cumulative asset—where each campaign, customer interaction, and system contributes to sustainable business growth over time.",
  },
  {
    icon: <BookOpen strokeWidth={1.5} className="size-12" />,
    title: "Administrative Marketing Education",
    description:
      "We provide structured guidance on managing and understanding your marketing systems, enabling better decision-making and operational control.",
  },
  {
    icon: <Briefcase strokeWidth={1.5} className="size-12" />,
    title: "Business-Building Education Program",
    description:
      "Our education-driven model helps main street business owners transition from self-employment to true business ownership—focusing on systems, scalability, and long-term value creation rather than day-to-day survival.",
  },
  {
    icon: <Bot strokeWidth={1.5} className="size-12" />,
    title: "AI Integration & Education",
    description:
      "Learn to integrate AI into your workflows while building systems that streamline operations, improve efficiency, and create long-term business value.",
  },
];

interface Timeline5Props {
  className?: string;
}

const Timeline5 = ({ className }: Timeline5Props) => {
  return (
    <section id="our-services" className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Fixed Content */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Unlock{" "}
                <span className="relative inline-block">
                  <span className="text-muted-foreground">AI</span>
                  <Sparkles className="absolute -top-2 -right-4 size-5 fill-yellow-500 stroke-none" />
                </span>
                <br />
                for your existing workflows
              </h2>
              <p className="mt-12 text-base text-muted-foreground">
                Seamlessly integrate AI into your workflows. Automate tasks,
                enhance efficiency, and stay ahead.
              </p>
            </div>
          </div>

          {/* Right Column - Scrollable Cards */}
          <div className="-mt-8 sm:-mt-12">
            {DATA.map((item, index) => (
              <div
                key={index}
                className="relative my-12 overflow-hidden rounded-lg bg-muted px-8 py-16 shadow-none sm:px-12 sm:py-24 lg:px-16 lg:py-32"
              >
                <div className="gap-4 sm:gap-6">
                  <div className="block shrink-0">{item.icon}</div>
                  <div className="absolute top-12 right-12 font-mono text-5xl">
                    0{index + 1}
                  </div>
                  <div className="mt-6">
                    <h4 className="mb-2 text-2xl font-semibold text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-6 text-xs text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline5 };
