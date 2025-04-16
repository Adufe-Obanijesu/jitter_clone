import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  heading: string;
  body: string;
}

export default function Feature({ icon, heading, body }: FeatureProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="font-semibold text-xl">{heading}</h4>
      </div>

      <p className="text-[#6e6e73] text-base">{body}</p>
    </div>
  );
}
