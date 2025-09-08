import { ReactNode } from "react";

interface PartnerProps {
  heading: string;
  body: string;
  icon: ReactNode;
}

export default function Partner({ heading, body, icon }: PartnerProps) {
  return (
    <div className="flex items-center gap-6">
      {icon}

      <div>
        <h2 className="font-semibold">{heading}</h2>
        <p className="text-[13px] text-gray-500 mt-1 font-medium">{body}</p>
      </div>
    </div>
  );
}
