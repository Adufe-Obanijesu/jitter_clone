import FadeOnScroll from "@/components/animations/FadeOnScroll";
import Testimonial from "@/components/Testimonial";
import { testimonials } from "@/data/testimonials";
import CreateFaster from "@/sections/create_faster";
import CreativePower from "@/sections/creative_power";
import Customers from "@/sections/customers";
import FeatureVideo from "@/sections/feature_video";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Info from "@/sections/info";
import Navbar from "@/sections/navigation/Navbar";
import Newsletter from "@/sections/newsletter";
import Templates from "@/sections/templates";
import UseCases from "@/sections/use_cases";
import WhatWeDo from "@/sections/what_we_do";
import WhatWeOffer from "@/sections/what_we_offer";
import WorkTogether from "@/sections/work_together";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="bg-white">
        <div className="max-w-[860px] mx-auto">
          <Navbar />
          <Hero />
          <Customers />
          <FadeOnScroll>
            <FeatureVideo />
          </FadeOnScroll>
          <WhatWeDo />
          <WhatWeOffer />
          <FadeOnScroll>
            <Testimonial {...testimonials[0]} />
          </FadeOnScroll>
          <FadeOnScroll>
            <Testimonial {...testimonials[1]} />
          </FadeOnScroll>
          <CreateFaster />
        </div>
        <WorkTogether />
        <div className="max-w-[860px] mx-auto">
          <CreativePower />
          <UseCases />
        </div>
        <Templates />
        <div className="max-w-[860px] mx-auto">
          <Info />
        </div>
      </div>
      <Footer />
      <Newsletter />
    </main>
  );
}
