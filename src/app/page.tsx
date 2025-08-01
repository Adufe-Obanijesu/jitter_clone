// TODO: remove use client
"use client"

// import FadeOnScroll from "@/components/animations/FadeOnScroll";
// import Chat from "@/components/Chat";
// import Testimonial from "@/components/Testimonial";
// import { testimonials } from "@/data/testimonials";
// import CreateFaster from "@/sections/create_faster";
// import CreativePower from "@/sections/creative_power";
// import Customers from "@/sections/customers";
// import FeatureVideo from "@/sections/feature_video";
// import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
// import HorizontalScroll from "@/sections/horizontal_scroll";
// import Info from "@/sections/info";
import Navbar from "@/sections/navigation/Navbar";
import {useGSAP} from "@gsap/react";
import {GSDevTools} from "gsap/GSDevTools";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
// import Newsletter from "@/sections/newsletter";
// import Templates from "@/sections/templates";
// import UseCases from "@/sections/use_cases";
// import WhatWeDo from "@/sections/what_we_do";
// import WhatWeOffer from "@/sections/what_we_offer";
// import WorkTogether from "@/sections/work_together";

gsap.registerPlugin(ScrollTrigger, useGSAP, GSDevTools);

export default function Home() {

  useGSAP(() => {
   // GSDevTools.create()
  })

  return (
    <main id="main">
      <div className="bg-white relative z-10 overflow-hidden">
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <Navbar />
          <Hero />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          {/*<Customers />*/}
          {/*<FadeOnScroll>*/}
          {/*  <FeatureVideo />*/}
          {/*</FadeOnScroll>*/}
          {/*<WhatWeDo />*/}
        </div>
        {/*<HorizontalScroll />*/}
        {/*<div className="lg:max-w-[860px] max-w-[400px] mx-auto">*/}
        {/*  <WhatWeOffer />*/}
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
      </div>
      {/*<Footer />*/}
      {/*<Newsletter />*/}

      {/*<Chat />*/}
    </main>
  );
}
