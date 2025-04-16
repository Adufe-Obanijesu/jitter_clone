import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="bg-light-grey py-2 px-4 font-semibold rounded-full">
      {children}
    </span>
  );
}
