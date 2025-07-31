import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="pt-14 pb-20 rounded-4xl">{children}</div>;
}
