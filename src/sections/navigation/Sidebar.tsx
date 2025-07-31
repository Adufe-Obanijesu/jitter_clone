import Button from "@/components/ui/Button";
import { sidebarLinks } from "@/data/navigation/sidebar";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="lg:hidden flex flex-col gap-4 h-full py-5 px-6 fixed top-0 left-0 w-full invisible">
        <div id="sidebar-overlay" className="absolute top-0 left-0 w-full h-full bg-light-grey scale-y-0 shadow-2xl" />
      <ul className="mt-[100px] flex-1 relative z-1 max-w-mobile w-full mx-auto">
        {sidebarLinks.map((link) => (
          <li className="sidebar-link" key={link.name}>
            <Link href="#" className="font-lausanne text-5xl">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div id="sidebar-button" className="flex justify-center relative z-1">
        <Button className="w-40">Sign up</Button>
      </div>
    </aside>
  );
}
