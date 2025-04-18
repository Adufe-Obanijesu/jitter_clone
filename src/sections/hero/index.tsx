import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center flex-col gap-[35px] mt-[130px] lg:py-20">
      <Link href="https://jitter.video/changelog/2025-02-04-infinite-canvas/">
        <div className="bg-light-grey rounded-full py-2 px-4 w-fit">
          <strong>New:</strong> Infinite Canvas{" "}
          <span className="text-purple font-semibold">Learn more</span>
        </div>
      </Link>

      <h1 className="lg:text-[80px] text-[64px] font-extrabold tracking-[-2.4px] !leading-[90%] text-center text-dark">
        Super <br className="md:hidden" /> fast motion
        <br />
        for every team
      </h1>

      <Button className="bg-[#b593ff] text-dark font-semibold px-12 py-4 text-xl">
        Try Jitter for free
      </Button>
    </div>
  );
}
