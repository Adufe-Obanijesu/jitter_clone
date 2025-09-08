import Button from "@/components/ui/Button";
import { menuLinks } from "@/data/navigation/menu";
import Link from "next/link";

export default function Menu() {
  return (
    <nav
      id="menu"
      className="lg:hidden flex flex-col gap-4 h-full py-5 px-6 fixed z-40 top-0 left-0 w-full invisible pointer-events-none"
    >
      <div
        id="menu-overlay"
        className="absolute top-0 left-0 w-full h-full bg-light-grey scale-y-0 shadow-2xl"
      />
      <ul className="mt-[100px] flex-1 relative z-1 max-w-mobile w-full mx-auto">
        {menuLinks.map((link) => (
          <li className="menu-link" key={link.name}>
            <Link href="#" className="font-lausanne text-5xl">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div id="menu-button" className="flex justify-center relative z-1">
        <Button className="w-40">Sign up</Button>
      </div>
    </nav>
  );
}
