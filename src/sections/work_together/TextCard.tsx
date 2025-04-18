import Button from "@/components/ui/Button";

export default function TextCard() {
  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] w-full max-w-[460px] h-[489px] lg:h-full shrink-0"
      style={{
        background: "linear-gradient(180deg,#a981ff,#d0bafe)",
        marginRight: "calc((100vw - 860px) / 2",
      }}
    >
      <div className="flex flex-col justify-between gap-4 h-full">
        <h2 className="text-white text-[30px] lg:text-[41px]">
          It&apos;s time for a better workflow. With Jitter, you can slide
          through the entire motion design process with your team, in one shared
          workspace.
        </h2>

        <div>
          <Button className="px-[50px]">Get started now</Button>
        </div>
      </div>
    </div>
  );
}
