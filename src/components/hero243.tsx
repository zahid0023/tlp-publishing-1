import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BookAppointmentButton } from "@/components/book-appointment-button";
import { cn } from "@/lib/utils";

interface Hero243Props {
  className?: string;
}

const Hero243 = ({ className }: Hero243Props) => {
  return (
    <section
      className={cn("h-screen w-screen overflow-hidden flex items-center justify-center relative", className)}
      style={{ background: "linear-gradient(135deg, #07142D 0%, #0d2147 60%, #1a1a2e 100%)" }}
    >
      {/* Coral radial glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#F08A85" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "#F08A85" }}
      />

      <div className="container mx-auto my-auto flex flex-col justify-center items-center border-t border-b border-dashed gap-14" style={{ borderColor: "rgba(240,138,133,0.2)" }}>
        <div className="relative flex w-full max-w-5xl flex-col justify-start gap-4 border border-t-0 border-dashed px-5 py-12 md:items-center md:justify-center lg:mx-auto" style={{ borderColor: "rgba(240,138,133,0.2)" }}>
          <p className="flex items-center gap-3 text-[1.4rem] font-medium tracking-wide text-white/60 md:text-[1.8rem] lg:text-[1.6rem]">
            <span className="inline-block size-2 rounded" style={{ backgroundColor: "#F08A85" }} />
            Welcome to TLP Publishing
          </p>

          <div className="mt-3 mb-7 w-full max-w-xl text-5xl font-semibold tracking-tighter text-white md:mb-10 md:text-center md:text-9xl lg:relative lg:mb-0 lg:text-left lg:text-7xl">
            <h1 className="relative z-10 inline md:mr-3">
              WE HELP GROW <br className="block md:hidden" /> YOUR{" "}
              <br className="block md:hidden" />
            </h1>
            <ContainerTextFlip
              className="absolute text-4xl font-medium font-semibold tracking-tighter md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:text-5xl lg:-bottom-4 lg:left-auto lg:translate-x-0 lg:text-7xl"
              words={["BUSINESS", "BRAND", "PRESENCE", "AUDIENCE"]}
            />
          </div>
        </div>

        <div>
          <BookAppointmentButton variant="coral" />
        </div>
      </div>
    </section>
  );
};

export { Hero243 };
