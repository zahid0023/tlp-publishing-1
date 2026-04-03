import { Cta18 } from "@/components/cta18";
import { Feature211 } from "@/components/feature211";
import { GetInTouch } from "@/components/get-in-touch";
import { Hero243 } from "@/components/hero243";
import { Pricing12 } from "@/components/pricing12";
import { Timeline12 } from "@/components/timeline12";
import { Timeline4 } from "@/components/timeline4";
import { Timeline5 } from "@/components/timeline5";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center items-center w-full h-full">
      <Hero243 />
      <Timeline4 />
      <Timeline12 />
      <Timeline5 />
      <Feature211 />
      <Pricing12 />
      <Cta18 />
      <GetInTouch />
    </main>
  );
}
