import Button from "@/components/ui/Button";
import { sidebarLinks } from "@/data/sidebar";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="lg:hidden flex flex-col h-full py-5 px-[30px]">
      <ul className="mt-[100px] flex-1">
        {sidebarLinks.map((link) => (
          <li key={link.name}>
            <Link href="#" className="font-lausanne text-5xl">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Button>Sign up</Button>
      </div>
    </aside>
  );
}
