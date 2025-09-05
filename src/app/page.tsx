"use client"


// Tools
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import {GSDevTools} from "gsap/GSDevTools";
import Draggable from "gsap/Draggable";
import SplitText from "gsap/SplitText";
import InertiaPlugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLenis from "@/hooks/useLenis";
import "@/effects"

// Sections
import Navbar from "@/sections/navigation/Navbar";
import Hero from "@/sections/hero";
import Customers from "@/sections/customers";
import FeatureVideo from "@/sections/feature_video";
import HorizontalScroll from "@/sections/horizontal_scroll";
import WhatWeDo from "@/sections/what_we_do";
import WhatWeOffer from "@/sections/what_we_offer";
import Testimonial from "@/components/Testimonial";
import CreateFaster from "@/sections/create_faster";
import WorkTogether from "@/sections/work_together";
import CreativePower from "@/sections/creative_power";
import UseCases from "@/sections/use_cases";
import Templates from "@/sections/templates";
import Info from "@/sections/info";
import Footer from "@/sections/footer";

// Components
import FadeOnScroll from "@/components/animations/FadeOnScroll";
// import Chat from "@/components/Chat";

// Data
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, Draggable, InertiaPlugin, GSDevTools);

export default function Home() {

  useLenis()

  return (
    <div className="bg-white relative z-10 ">
      <h1 className="sr-only">Jitter</h1>
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <Navbar />
        </div>
        <main id="main">
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <Hero />
          <Customers />
          <FadeOnScroll>
            <FeatureVideo />
          </FadeOnScroll>
          <WhatWeDo />
        </div>
          <HorizontalScroll />
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <WhatWeOffer />
          <FadeOnScroll translate>
            <Testimonial {...testimonials[0]} />
          </FadeOnScroll>
          <CreateFaster />
          <FadeOnScroll translate>
            <Testimonial {...testimonials[1]} />
          </FadeOnScroll>
        </div>
          <WorkTogether />

        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <CreativePower />
          <UseCases />
        </div>

          <Templates />

        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <Info />
        </div>

          <Footer />
    </main>

        {/*<Chat />*/}
      </div>
  );
}
