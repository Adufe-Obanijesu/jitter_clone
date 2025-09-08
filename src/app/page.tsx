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
import WhatWeDo from "@/sections/what_we_do";

// Lazy loaded components
const HorizontalScroll = dynamic(() => import("@/sections/horizontal_scroll"));
const WhatWeOffer = dynamic(() => import("@/sections/what_we_offer"));
const Testimonial = dynamic(() => import("@/components/Testimonial"));
const CreateFaster = dynamic(() => import("@/sections/create_faster"));
const WorkTogether = dynamic(() => import("@/sections/work_together"));
const CreativePower = dynamic(() => import("@/sections/creative_power"));
const UseCases = dynamic(() => import("@/sections/use_cases"));
const Templates = dynamic(() => import("@/sections/templates"));
const Info = dynamic(() => import("@/sections/info"));
const Footer = dynamic(() => import("@/sections/footer"));


// Components
import FadeOnScroll from "@/components/animations/FadeOnScroll";
// import Chat from "@/components/Chat";

// Data
import { testimonials } from "@/data/testimonials";
import dynamic from "next/dynamic";

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
