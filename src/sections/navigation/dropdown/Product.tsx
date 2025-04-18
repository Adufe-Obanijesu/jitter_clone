import ScaleDown from "@/components/animations/ScaleDown";
import EachProduct from "@/components/navigation/product/EachProduct";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Product() {
  return (
    <div className="flex gap-2.5 w-[860px]">
      <div className="flex-1 space-y-2.5">
        <ScaleDown>
          <EachProduct text="Import from Figma" link="#" bg="blue-gradient" />
        </ScaleDown>
        <ScaleDown>
          <EachProduct
            text="A brand-new way to design and animate"
            link="#"
            bg="deep-purple"
          />
        </ScaleDown>
      </div>
      <div className="flex-1 space-y-2.5">
        <ScaleDown>
          <EachProduct
            text="Unlock collaboration"
            link="#"
            text_color="primary"
          />
        </ScaleDown>
        <ScaleDown>
          <EachProduct
            text="Export to 4K, GIF, Lottie"
            link="#"
            text_color="primary"
            text_width="158px"
          />
        </ScaleDown>
      </div>
      <div className="pl-20 space-y-5">
        <div className="space-y-3.5">
          <p className="dropdown-links opacity-0 font-semibold text-xl">
            What&apos;s new
          </p>
          <nav>
            <ul className="font-semibold space-y-2.5">
              <li className="dropdown-links opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  New website
                </Link>
              </li>
              <li className="dropdown-links opacity-0">
                <Link
                  href="#"
                  className="hover:opacity-50 cursor-pointer transition_item"
                >
                  CSS Easing export
                </Link>
              </li>
              <li className="dropdown-links opacity-0">
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
  );
}
