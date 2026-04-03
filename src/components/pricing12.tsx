import { Check, PhoneCall, Zap } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const featuredPricing = [
  {
    id: "addon-1",
    title: "STARTER OFFER",
    description: "Establish your essential online presence with a done-for-you 3-page website.",
    pricing: {
      trial: {
        price: "$0",
        duration: "6 months",
        label: "Free for 6 months"
      },
      recurring: {
        price: "$50.00",
        interval: "month",
        label: "$50.00/mo"
      }
    },
    highlights: [
      "3-Page Website (Done For You)",
      "2 Revisions Included",
      "Professional Design Setup",
      "Mobile Responsive Layout",
      "Basic SEO Optimization"
    ]
  },
  {
    id: "addon-2",
    title: "THE LAUNCHPAD",
    description: "Kickstart your marketing with a 5-page site plus your choice of one essential automation tool.",
    pricing: {
      trial: {
        price: "$0",
        duration: "5 months",
        label: "Free for 5 months"
      },
      recurring: {
        price: "$65.00",
        interval: "month",
        label: "$65.00/mo"
      }
    },
    highlights: [
      "5-Page Website (Done For You)",
      "3 Revisions Included",
      "Choose 1 Automation Tool",
      "Email Marketing",
      "2-Way SMS / Call Marketing",
      "Booking & Appointment",
      "Call Tracking",
      "Surveys & Forms",
      "Tracking & Analytics",
      "Communities",
      "Chatbot"
    ]
  },
];

const otherPricing = [
  {
    id: "addon-3",
    title: "THE SPOTLIGHT",
    description: "Step into the light with expanded features—choose two premium tools to engage your audience.",
    pricing: {
      trial: {
        price: "$0",
        duration: "4 months",
        label: "Free for 4 months"
      },
      recurring: {
        price: "$80.00",
        interval: "month",
        label: "$80.00/mo"
      }
    },
    highlights: [
      "5-Page Website (Done For You)",
      "4 Revisions Included",
      "Choose 2 Premium Tools",
      "Email Marketing",
      "2-Way SMS / Call Marketing",
      "Booking & Appointment",
      "Call Tracking",
      "Surveys & Forms",
      "Tracking & Analytics",
      "Communities",
      "Chatbot"
    ]
  },
  {
    id: "addon-4",
    title: "THE EMPIRE SUITE",
    description: "The ultimate value package—unlock every feature, full CRM access, and maximum automation for one price.",
    pricing: {
      trial: {
        price: "$0",
        duration: "3 months",
        label: "Free for 3 months"
      },
      recurring: {
        price: "$97.00",
        interval: "month",
        label: "$97.00/mo"
      }
    },
    highlights: [
      "7-Page Website (Done For You) with Chatbot",
      "Unlimited Revisions",
      "Full CRM Access",
      "All Features Included",
      "Email Marketing",
      "2-Way SMS / Call Marketing",
      "Booking & Appointment",
      "Call Tracking",
      "Surveys & Forms",
      "Tracking & Analytics",
      "Communities"
    ]
  },
];

interface Pricing12Props {
  className?: string;
}

const Pricing12 = ({ className }: Pricing12Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="rounded-xl border border-border py-6 md:py-8 lg:pt-16">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="mb-8 md:mb-10 md:flex md:justify-between lg:mb-9">
              <div className="lg:w-2/3">
                <h1 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl">
                  Pricing
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                  Choose the perfect plan to elevate your online presence and drive business growth. Our pricing options are designed to fit your needs, whether you're just starting out or looking to scale up. Each plan includes a free trial period, so you can experience the benefits before committing. Select the plan that best suits your goals and watch your business thrive with our powerful tools and features.
                </p>
              </div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="placeholder"
                className="hidden size-24 md:block lg:size-32"
              />
            </div>

            <div className="flex flex-col gap-x-8 gap-y-3 xl:flex-row">
              {featuredPricing.map((addon) => (
                <Card
                  key={addon.id}
                  className="flex flex-1 flex-col bg-accent p-6 lg:py-8"
                >
                  <CardHeader className="p-0">
                    <CardTitle className="mb-1.5 text-base font-medium lg:mb-2 lg:text-lg">
                      {addon.title}
                    </CardTitle>
                    <CardDescription className="text-xs lg:text-base">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-6 flex flex-1 flex-col gap-4 p-0 lg:mt-8">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Trial
                      </p>
                      <p className="mt-0.5 font-medium lg:text-2xl">
                        {addon.pricing.trial.price}
                        <span className="text-xs font-medium text-muted-foreground">
                          {" "}
                          for {addon.pricing.trial.duration}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Then
                      </p>
                      <p className="mt-0.5 font-medium lg:text-2xl">
                        {addon.pricing.recurring.price}
                        <span className="text-xs font-medium text-muted-foreground">
                          {" "}
                          / {addon.pricing.recurring.interval}
                        </span>
                      </p>
                    </div>
                    <Separator />
                    <ul className="space-y-1.5">
                      {addon.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs lg:text-sm">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-6 p-1">
                    <a
                      href="#"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Get Started
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border md:mt-8 lg:mt-10">
            <div className="flex flex-col gap-6 px-6 py-6 md:px-8 lg:px-12 lg:py-10">
              {otherPricing.map((addon) => (
                <Card key={addon.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="mb-1.5 text-lg font-medium md:text-xl lg:mb-2 lg:text-2xl">
                      {addon.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-xs lg:text-base">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Trial
                      </p>
                      <p className="mt-0.5 text-2xl font-medium md:text-3xl lg:text-4xl">
                        {addon.pricing.trial.price}
                        <span className="text-xs text-muted-foreground">
                          {" "}
                          for {addon.pricing.trial.duration}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Then
                      </p>
                      <p className="mt-0.5 text-2xl font-medium md:text-3xl lg:text-4xl">
                        {addon.pricing.recurring.price}
                        <span className="text-xs text-muted-foreground">
                          {" "}
                          / {addon.pricing.recurring.interval}
                        </span>
                      </p>
                    </div>
                    <Separator />
                    <ul className="space-y-1.5">
                      {addon.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs lg:text-sm">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-green-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href="#"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Get Started
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="border-t border-border px-6 py-6 md:mt-8 md:px-8 lg:mt-10 lg:px-12 lg:py-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-center justify-center gap-4">
                <div className="shrink-0 rounded-lg bg-accent p-2.5">
                  <Zap className="size-12 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Unrestricted Growth, Zero Waste.</p>
                  <p className="mt-1 text-xs text-muted-foreground lg:text-sm">
                    Scale your outreach without limits. Our communication tool operates on a simple usage-based model, giving you total control over your budget with industry-low rates.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <div className="shrink-0 rounded-lg bg-accent p-2.5">
                  <PhoneCall className="size-12 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Stop guessing where your leads come from.</p>
                  <p className="mt-1 text-xs text-muted-foreground lg:text-sm">
                    Simply connect your existing business number or claim a brand-new local line through our system to unlock advanced Call Tracking. You&apos;ll get instant analytics, call recording, and the ability to text back missed calls automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing12 };
