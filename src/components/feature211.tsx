"use client";

import { cn } from "@/lib/utils";

interface Feature211Props {
  className?: string;
}

const Feature211 = ({ className }: Feature211Props) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="rounded-xl bg-muted py-11 px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col gap-4 md:w-1/2">
              <h2 className="text-2xl font-bold text-foreground">TLP Publishing: Digital Solutions Designed for Your Growth</h2>
              <p className="text-lg text-foreground">Every business is unique, and so is its stage of growth. Whether you&apos;re a solo entrepreneur seeking a professional presence or an established company ready to automate your sales process, we have a solution tailored just for you.</p>
              <h3 className="text-xl font-semibold text-foreground">Plans That Grow With Your Business</h3>
              <p className="text-lg text-foreground">Picking the right plan is key to accelerating your growth. Our flexible packages are designed to meet your current needs and scale as your ambitions expand—whether you&apos;re starting out, building a team, or managing a large enterprise.</p>
              <h3 className="text-xl font-semibold text-foreground">Try Us Risk-Free—We&apos;re Confident You&apos;ll See Results</h3>
              <p className="text-lg text-foreground">Experience the full power of TLP Publishing&apos;s digital growth engine with free months on us.</p>
              <ul className="text-lg text-foreground space-y-1">
                <li>✓ No contracts, no commitments.</li>
                <li>✓ Cancel anytime—even after the free trial ends.</li>
              </ul>
              <p className="text-lg font-medium text-foreground">Get started today with one of our 4 growth packages and take your business to the next level.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <video
                className="w-full rounded-lg object-cover"
                autoPlay
                muted
                playsInline
                controls
              >
                <source src="https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/69aed862b9be7010650cfcb0.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export { Feature211 };
