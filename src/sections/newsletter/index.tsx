"use client";

import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <div className="bg-black flex items-center justify-center w-full h-screen">
      <div className="max-w-[860px] mx-auto px-4 flex items-center gap-12 lg:gap-16">
        <video
          src="/videos/newsletter/animation.mp4"
          muted
          playsInline
          autoPlay
          aria-hidden="true"
          className="w-[344px]"
        />

        <div className="flex-1">
          <div className="space-y-10 flex flex-col items-center">
            <h2 className="text-white text-[40px] font-bold">
              Get product updates and inspiration in your inbox every month
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex bg-[#2d2933] rounded-r-full"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className=" pl-6 py-3 text-white rounded-md flex-grow focus:outline-none font-bold"
              />
              <Button className="bg-[#f5ff63] text-dark text-lg hover:scale-105 px-[50px]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
