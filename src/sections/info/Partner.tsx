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
        <h4 className="font-semibold">{heading}</h4>
        <p className="text-[13px] text-dark opacity-50 mt-1 font-medium">
          {body}
        </p>
      </div>
    </div>
  );
}
