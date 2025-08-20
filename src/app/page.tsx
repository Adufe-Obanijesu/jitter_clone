"use client"

// import Chat from "@/components/Chat";
// import Testimonial from "@/components/Testimonial";
// import { testimonials } from "@/data/testimonials";
// import CreateFaster from "@/sections/create_faster";
// import CreativePower from "@/sections/creative_power";
// import Footer from "@/sections/footer";
// import HorizontalScroll from "@/sections/horizontal_scroll";
// import Info from "@/sections/info";
// import Newsletter from "@/sections/newsletter";
// import Templates from "@/sections/templates";
// import UseCases from "@/sections/use_cases";
// import WorkTogether from "@/sections/work_together";

// Tools
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import {GSDevTools} from "gsap/GSDevTools";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@/effects"

// Sections
import Navbar from "@/sections/navigation/Navbar";
import Hero from "@/sections/hero";
import Customers from "@/sections/customers";
import FeatureVideo from "@/sections/feature_video";
import WhatWeDo from "@/sections/what_we_do";
import WhatWeOffer from "@/sections/what_we_offer";

// Components
import FadeOnScroll from "@/components/animations/FadeOnScroll";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, GSDevTools);

export default function Home() {

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

          <div className="h-[200vh] w-full" />

        {/* </div> */}
        {/*<HorizontalScroll />*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*  <FadeOnScroll>*/}
        {/*    <Testimonial {...testimonials[0]} />*/}
        {/*  </FadeOnScroll>*/}
        {/*  <CreateFaster />*/}
        {/*  <FadeOnScroll>*/}
        {/*    <Testimonial {...testimonials[1]} />*/}
        {/*  </FadeOnScroll>*/}
        {/*</div>*/}
        {/*<WorkTogether />*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*  <CreativePower />*/}
        {/*</div>*/}
        {/*<UseCases />*/}
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
