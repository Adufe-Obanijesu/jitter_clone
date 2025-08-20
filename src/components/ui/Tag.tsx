import { ReactNode } from "react";
import {cn} from "@/utils/tailwind";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={cn(
        "bg-light-grey py-1 px-4 font-semibold rounded-full lg:text-xl w-fit",
        className,
      )}
    >
      {children}
    </span>
  );
}
