"use client";

import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="sticky bottom-0 left-0  bg-black flex items-center justify-center w-full h-screen max-h-[650px]"
    >
      <div className="px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 lg:max-w-[860px] max-w-[400px] mx-auto">
        <video
          src="/videos/newsletter/animation.mp4"
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
          className="lg:w-[344px] w-[300px]"
        />

        <div className="flex-1">
          <div className="space-y-10 flex flex-col items-center">
            <h2 className="text-white text-[30px] lg:text-[40px] font-bold">
              Get product updates and inspiration in your inbox every month
            </h2>

            <div className="space-y-4 w-full">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="lg:flex bg-[#2d2933] lg:rounded-r-full w-full"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className=" pl-6 py-3 w-full lg:w-auto text-white rounded-md flex-grow focus:outline-none font-bold"
                />
                <Button className="hidden lg:inline bg-[#f5ff63] text-dark text-lg hover:scale-105 px-[50px]">
                  Subscribe
                </Button>
              </form>
              <Button className="lg:hidden w-full bg-[#f5ff63] text-center text-dark text-lg hover:scale-105 px-[50px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
