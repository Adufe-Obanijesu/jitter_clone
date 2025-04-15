import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <div className="flex items-center flex-col gap-[35px] mt-[130px] py-20">
      <div className="bg-light-grey rounded-full py-2 px-4 w-fit">
        <strong>New:</strong> Infinite Canvas{" "}
        <span className="text-purple font-semibold">Learn more</span>
      </div>

      <h1 className="text-[80px] font-extrabold tracking-[-2.4px] !leading-[90%] text-center text-dark">
        Super fast motion
        <br />
        for every team
      </h1>

      <Button className="bg-[#b593ff] text-dark font-semibold px-12 py-4 text-xl">
        Try Jitter for free
      </Button>
    </div>
  );
}
