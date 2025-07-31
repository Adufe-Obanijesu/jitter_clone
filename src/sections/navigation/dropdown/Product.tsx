import EachProduct from "@/components/navigation/product/EachProduct";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {products} from "@/data/navigation/product";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useEffect} from "react";

export default function Product() {

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
      <div className="w-full">
    <div className="flex gap-3 mx-auto w-[860px]">
      <div className="flex-1 space-y-3">
        {
          products.slice(0, 2).map((product) => (
          <EachProduct key={product.id} product={product} />
          ))
        }
      </div>
      <div className="flex-1 space-y-2.5">
          {
              products.slice(2, products.length).map((product) => (
                  <EachProduct key={product.id} product={product} />
              ))
          }

      </div>
      <div className="pl-20 space-y-5">
        <div className="space-y-3.5">
          <p className="dropdown-link opacity-0 font-semibold text-xl">
            What&apos;s new
          </p>
          <nav>
            <ul className="font-semibold space-y-2.5">
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  New website
                </Link>
              </li>
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  CSS Easing export
                </Link>
              </li>
              <li className="dropdown-link opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  All-new Figma plugin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Button
          className="dropdown-button scale-0 bg-light-grey text-primary font-lausanne font-semibold text-lg"
          rightIcon={<FaArrowRight />}
        >
          See what&apos;s new
        </Button>
      </div>
    </div>
      </div>
  );
}
