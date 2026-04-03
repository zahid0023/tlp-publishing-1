import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero243Props {
  className?: string;
}

const Hero243 = ({ className }: Hero243Props) => {
  return (
    <section className={cn("h-screen w-screen overflow-hidden flex items-center justify-center", className)}>
      <div className="container mx-auto my-auto flex flex-col justify-center items-center border-t border-b border-dashed gap-14">
        <div className="relative flex w-full max-w-5xl flex-col justify-start gap-4 border border-t-0 border-dashed px-5 py-12 md:items-center md:justify-center lg:mx-auto">
          <p className="flex items-center gap-3 text-[1.4rem] font-medium tracking-wide text-gray-600 md:text-[1.8rem] lg:text-[1.6rem]">
            <span className="inline-block size-2 rounded bg-green-500" />
            Welcome to TLP Publishing
          </p>

          <div className="mt-3 mb-7 w-full max-w-xl text-5xl font-semibold tracking-tighter md:mb-10 md:text-center md:text-9xl lg:relative lg:mb-0 lg:text-left lg:text-7xl">
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
          <Button className="group relative h-14 overflow-hidden rounded-full bg-black px-8 text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-white dark:text-black hover:cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">Book An Appointment <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero243 };
