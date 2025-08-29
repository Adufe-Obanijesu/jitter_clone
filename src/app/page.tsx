"use client"

// import Chat from "@/components/Chat";
// import Footer from "@/sections/footer";
// import HorizontalScroll from "@/sections/horizontal_scroll";
// import Info from "@/sections/info";
// import Newsletter from "@/sections/newsletter";
// import Templates from "@/sections/templates";

// Tools
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import {GSDevTools} from "gsap/GSDevTools";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLenis from "@/hooks/useLenis";
import "@/effects"

// Sections
// import Navbar from "@/sections/navigation/Navbar";
import Hero from "@/sections/hero";
import Customers from "@/sections/customers";
import FeatureVideo from "@/sections/feature_video";
import WhatWeDo from "@/sections/what_we_do";
import WhatWeOffer from "@/sections/what_we_offer";
import Testimonial from "@/components/Testimonial";
import CreateFaster from "@/sections/create_faster";
import WorkTogether from "@/sections/work_together";
import CreativePower from "@/sections/creative_power";
import UseCases from "@/sections/use_cases";

// Components
import FadeOnScroll from "@/components/animations/FadeOnScroll";
import SplitText from "gsap/SplitText";

// Data
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, Draggable, InertiaPlugin, GSDevTools);

export default function Home() {

  useLenis()

  return (
    <div className="bg-white relative z-10 overflow-hidden">
      <h1 className="sr-only">Jitter</h1>
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          {/*<Navbar />*/}
        <main id="main">
          <Hero />
          <Customers />
          <FadeOnScroll>
            <FeatureVideo />
          </FadeOnScroll>
          <WhatWeDo />
          <WhatWeOffer />
          <FadeOnScroll translate>
            <Testimonial {...testimonials[0]} />
          </FadeOnScroll>
          <CreateFaster />
          <FadeOnScroll translate>
            <Testimonial {...testimonials[1]} />
          </FadeOnScroll>
          <WorkTogether />
          <CreativePower />
          <UseCases />

          <div className="h-[200vh] w-full" />

        {/* </div> */}
        {/*<HorizontalScroll />*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*</div>*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*</div>*/}
        {/*<Templates />*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*  <Info />*/}
        {/*</div>*/}
    {/*<Footer />*/}
    {/*<Newsletter />*/}

    {/*<Chat />*/}
    </main>
      </div>
      </div>
  );
}
