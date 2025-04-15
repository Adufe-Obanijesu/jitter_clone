import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="pt-10 pb-24 rounded-4xl">{children}</div>;
}
