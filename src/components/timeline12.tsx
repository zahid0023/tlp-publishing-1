"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BookAppointmentButton } from "@/components/book-appointment-button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Timeline12Props {
  className?: string;
}

const Timeline12 = ({ className }: Timeline12Props) => {
  const PHASES__DATA = [
    {
      id: "phase1",
      phase: "1",
      title: "Professionalism",
      heading: "Professionalism at Every Level",
      description:
        "Our communication is deliberate and respectful.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Phase 1 illustration",
    },
    {
      id: "phase2",
      phase: "2",
      title: "Integrity",
      heading: "Trust and Reliability",
      description:
        "We understand the weight of financial decisions. Our operations are rooted in sound judgment and dependable outcomes.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Phase 2 illustration",
    },
    {
      id: "phase3",
      phase: "3",
      title: "Discipline",
      heading: "Discreet and Purpose-Driven",
      description:
        "We focus on creating value through structured, intentional investments, always guided by strategy over speculation.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "Phase 3 illustration",
    },
    {
      id: "phase4",
      phase: "4",
      title: "Stability",
      heading: "Visual & Operational Stability",
      description:
        "From our polished online presence to the properties we represent, stability is our signature.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Phase 4 illustration",
    },
  ];

  return (
    <section className={cn("bg-background", className)}>
      <div className="container flex flex-col items-center justify-center py-32">
        <h1 className="mb-12 text-5xl font-semibold tracking-tighter lg:mb-25 lg:text-7xl">
          Just Four Mantras
        </h1>
        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
            {PHASES__DATA.map((phase) => (
              <TabsTrigger
                key={phase.id}
                className="text-2xl rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground hover:cursor-pointer"
                value={phase.id}
              >
                <span className="hidden font-mono text-foreground/40 md:inline">
                  {phase.phase}
                </span>
                {phase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {PHASES__DATA.map((phase) => (
            <TabsContent
              key={phase.id}
              value={phase.id}
              className="mt-12 grid items-center gap-12 lg:grid-cols-2"
            >
              <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4">
                <h2 className="text-3xl font-medium tracking-tighter text-foreground md:text-5xl">
                  {phase.heading}
                </h2>
                <p className="text-lg font-normal tracking-tighter text-muted-foreground">
                  {phase.description}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
                className="relative z-20 col-span-1"
              >
                <Card className="group h-110 w-full rounded-3xl border border-border bg-background p-2 shadow-none">
                  <CardContent className="size-full rounded-2xl border-2 border-background bg-muted">
                    <img
                      src={phase.imageSrc}
                      className="size-full transition-all ease-in-out group-hover:scale-95"
                      alt={phase.imageAlt}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-22">
          <BookAppointmentButton />
        </div>
      </div>
    </section>
  );
};

export { Timeline12 };
