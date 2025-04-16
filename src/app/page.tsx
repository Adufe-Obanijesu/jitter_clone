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
import WhatWeDo from "@/sections/what_we_do";

export default function Home() {
  return (
    <main>
      <div className="max-w-[860px] mx-auto">
        <Navbar />
        <Hero />
        <Customers />
        <FadeOnScroll>
          <FeatureVideo />
        </FadeOnScroll>
        <WhatWeDo />
        <FadeOnScroll>
          <Testimonial {...testimonials[0]} />
        </FadeOnScroll>
        <FadeOnScroll>
          <Testimonial {...testimonials[1]} />
        </FadeOnScroll>
        <CreateFaster />
        <CreativePower />
        <Info />
      </div>
      <Footer />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
