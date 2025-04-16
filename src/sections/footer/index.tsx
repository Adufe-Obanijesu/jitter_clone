import Button from "@/components/ui/Button";
import { footerLinks } from "@/data/footer/footer";
import { socialLinks } from "@/data/footer/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-[160px] pb-[98px] bg-light-grey rounded-b-[80px]">
      <div className="px-8 max-w-[860px] mx-auto space-y-[100px]">
        <div className="w-full flex flex-col items-center gap-[30px]">
          <h1 className="text-7xl font-bold text-center">Try Jitter today</h1>
          <p className="text-center text-lg max-w-[310px]">
            No download, no install, no waiting. Start creating instantly.
          </p>
          <Button className="text-xl">Get started for free</Button>
        </div>

        <div className="w-[860px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-12 text-sm">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg text-dark mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="hover:opacity-50 transition_item duration-200 text-base"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-base text-dark">
              &copy; Jitter 2025. All rights reserved
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  aria-label={link.name}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 mt-[60px]">
            <p className="text-xs text-[#97979b] leading-[150%] max-w-4xl">
              All featured work on this website is presented for illustrative
              purposes only, showcasing real-life examples of motion design.
              Jitter does not claim ownership of any of the displayed works. All
              rights remain with their respective creators. Logos, assets, and
              other branded content are the property of their original owners
              and are not to be used, reproduced, or redistributed. If you are
              the rightful owner of any content and would like it credited
              differently or removed, please contact us at support@jitter.video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
