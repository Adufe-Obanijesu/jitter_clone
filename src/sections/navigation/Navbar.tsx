"use client";

import { nav_links } from "@/data/nav_links";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./dropdown/Wrapper";
import Button from "@/components/ui/Button";
import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, { x: -100, opacity: 0 });
  }, []);

  return (
    <div className="w-full fixed top-[39px] left-0 flex items-center flex-col bg-white">
      <nav className="flex justify-between items-center gap-8  w-full max-w-[920px] px-[30px] shadow-nav h-[90px] rounded-4xl">
        <div className="flex justify-between items-center gap-6">
          <Image src="/logo.svg" width={82} height={28} alt="Jitter logo" />
          <ul className="flex justify-between items-center">
            {nav_links.map((link) => (
              <li key={link} className="px-5 py-4 font-semibold text-primary">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="px-5 py-4 font-semibold text-primary shrink-0"
          >
            Log in
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/join" className="shrink-0">
              <Button>Try for free</Button>
            </Link>
            <Button
              ref={buttonRef}
              className="text-white shrink-0 rounded-full w-[56px] h-[56px] p-0 flex justify-center items-center"
            >
              <IoMdMenu className="text-lg" />
            </Button>
          </div>
        </div>
      </nav>

      {/* <Wrapper> */}
      {/* <Product /> */}
      {/* <Customer />
      </Wrapper> */}
    </div>
  );
}
