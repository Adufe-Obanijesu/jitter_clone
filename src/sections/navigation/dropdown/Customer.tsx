import DeliverooIcon from "@/components/icons/navigation/deliveroo";
import RampIcon from "@/components/icons/navigation/ramp";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Customer() {

    useGSAP(() => {
        gsap.timeline({delay: .25})
            .from(`.dropdown-card`, {
                scale: 1.3,
                opacity: 0,
                stagger: .05,
                ease: "back(3)",
            })
            .to(".dropdown-link", {
                opacity: 1,
                stagger: 0.05
            }, "<")
            .to(".dropdown-button", {
                scale: 1,
            }, "<")
    })

  return (
    <div className="flex gap-2.5 w-[860px] mx-auto">
      <div className="flex-1">
          <div className="dropdown-card hover:scale-95 cursor-pointer flex-1 bg-primary p-[30px] h-[380px] rounded-[20px] flex flex-col justify-between">
            <div className="h-[200px] flex justify-center items-center">
              <Image
                src="/icons/perplexity.svg"
                width={82.82}
                height={95.76}
                alt="perplexity"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-xl text-white max-w-[198px]">
                How Perplexity brings their brand to life with Jitter
              </h3>
              <div className="flex items-center gap-1.5">
                <Link href="#" className="font-semibold text-white">
                  Learn more
                </Link>
                <FaArrowRight className="text-blue" />
              </div>
            </div>
          </div>
      </div>
      <div className="flex-1 space-y-2.5 shrink-0">
          <div className="hover:scale-95 dropdown-card">

          <div
            className={`"group/ramp hover:bg-primary transition_item cursor-pointer rounded-[20px] p-[30px] h-[185px] w-full flex items-center justify-center bg-light-grey`}
          >
            <RampIcon />
          </div>
          </div>
          <div className="hover:scale-95 dropdown-card">

          <div
            className={`group/inner hover:bg-primary transition_item cursor-pointer rounded-[20px] p-[30px] h-[185px] w-full flex items-center justify-center bg-light-grey`}
          >
            <DeliverooIcon />
          </div>
          </div>
      </div>
      <div className="pl-20 space-y-5">
        <div className="space-y-3.5">
          <p className="dropdown-link opacity-0 font-semibold text-xl">
            All customers
          </p>
          <nav>
            <ul className="font-semibold space-y-2.5">
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  Creative teams
                </Link>
              </li>
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  Agencies
                </Link>
              </li>
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  Studios
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Button
          className="dropdown-button scale-0 bg-light-grey text-primary font-lausanne font-semibold text-lg"
          rightIcon={<FaArrowRight />}
        >
          See all customers
        </Button>
      </div>
    </div>
  );
}
